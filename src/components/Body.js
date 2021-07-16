import React, { Component } from "react";
import Loading from "./Loading";
import axios from "axios";
import ReactPaginate from "react-paginate";
const url = "https://hacker-news.firebaseio.com/v0";

class Body extends Component {
  constructor() {
    super();
    this.state = {
      stories: [],
      pageNumber: 0
    };
  }

  componentDidMount() {
    const { type } = this.props;

    const fetchData = async () => {
      const ids = await axios.get(`${url}/${type}stories.json`);
      const storyIds = ids.data.slice(0, 30);
      const arr = storyIds.map((storyId) => {
        return axios.get(`${url}/item/${storyId}.json`);
      })
      const temp = await Promise.all(arr);
      const results = temp.map((item) => item.data);

      this.setState({
        stories: results,
      });
    };

    fetchData();
  }

  changePage = ({ selected }) => {
    this.setState({
      pageNumber: selected
    })
  }

  render() {
    const { stories } = this.state;
    if (stories.length === 0) return <Loading />;

    const storiesPerPage = 10;
    const pageVisited = this.state.pageNumber * storiesPerPage
    const pageCount = Math.ceil(stories.length / storiesPerPage)
    const displayUser = stories.slice(pageVisited, pageVisited + storiesPerPage).map((items, index) => {
      return (
        <div key={index} className="border bg-light p-2 m-4 rounded shadow-sm">
          <a href={`${items.url}`} target="_blank" rel="noreferrer" className="heading"><span>{items.title}</span></a>  <br /><br />
          <span className="badge bg-danger rounded-pill">by {items.by}</span>&ensp;
          <span className="badge bg-success rounded-pill">{Math.floor(items.time % 60)} minutes ago</span>
        </div>
      )
    })

    return (
      <div className="content">
        {displayUser}
        <ReactPaginate
          previousLabel="<<"
          nextLabel=">>"
          pageCount={pageCount}
          onPageChange={this.changePage}
          containerClassName="page-btn"
          previousLinkClassName="previous-btn"
          nextLinkClassName="next-btn"
          disabledClassName="page-disabled"
          activeClassName="page-active"
        />
      </div>
    )
  }
}

export default Body;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SearchForm from "./SearchForm";
import UserList from "./UserList";

const API = "https://api.github.com/";

export default function Search() {
  const [users, setUsers] = useState(false);
  const [keyword, setKeyword] = useState("starlyn231");

  const fetchSearch = (keyword) => {
    let url = `${API}search/users?q=${keyword}&per_page=10`;
    axios
      .get(url)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.log("Oops! Fetching Failed: ", error);
        setUsers(false);
      });
  };
  useEffect(() => {
    fetchSearch(keyword);
    // eslint-disable-next-line
  }, []);
  return (
    <>
      <SearchForm
        keyword={keyword}
        setKeyword={setKeyword}
        fetchSearch={fetchSearch}
      />
      <UserList users={users} />
    </>
  );
}

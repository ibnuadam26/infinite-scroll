import React, { useState, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const style = {
  height: 30,
  border: "1px solid green",
  margin: 6,
  padding: 8,
};

export default function App() {
  const [items, setItems] = useState(Array.from({ length: 20 }, (_, index) => ({
    id: index,
    content: `Item ${index}`
  })));
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    if (items.length >= 100) {
      setHasMore(false);
    }
  }, [items]);

  const fetchMoreData = () => {
    setTimeout(() => {
      const newItems = Array.from({ length: 20 }, (_, index) => ({
        id: items.length + index,
        content: `Item ${items.length + index}`
      }));

      setItems([...items, ...newItems]);
    }, 1500);
  }

  return (
    <div>
      <h1>demo: react-infinite-scroll-component</h1>
      <hr />
      <InfiniteScroll
        dataLength={items.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Loading...</h4>}
      >
        {items.map((i) => (
          <div style={style} key={i.id}>
            {i.content}
          </div>
        ))}
      </InfiniteScroll>
    </div>
  );
}

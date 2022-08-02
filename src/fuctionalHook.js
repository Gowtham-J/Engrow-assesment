import { useEffect, useRef, useState } from "react";

const FunctionalScroll = () => {
  const [items, setItems] = useState(10);
  const [loadingState, setLoadingState] = useState(false);
  const isScroll = useRef(null);

  const loadMoreItems = () => {
    if (loadingState) {
      return;
    }
    setLoadingState(true);
    setTimeout(() => {
      setItems(items + 10);
      setLoadingState(false);
    }, 1000);
  };
  const displayItems = () => {
    let result = [];
    for (let i = 0; i < items; i++) {
      result.push(<li key={i}>item{i}</li>);
    }
    return result;
  };

  useEffect(() => {
    isScroll.current.addEventListener(
      "scroll",
      () => {
        if (
          isScroll.current.scrollTop + isScroll.current.clientHeight >=
          isScroll.current.scrollHeight - 20
        ) {
          loadMoreItems();
        }
      },
      []
    );
  }, [items]);

  return (
    <div ref={isScroll} style={{ height: "200px", overflow: "auto" }}>
      <ul>
        {displayItems()}
        {loadingState ? <p className="loading"> loading More Items..</p> : ""}
      </ul>
    </div>
  );
};

export default FunctionalScroll;

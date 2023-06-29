import MainPageTemplate from "./template";
import { useDispatch, useSelector } from 'react-redux'; // 이 부분 추가
import { useEffect } from 'react';
import { getPostsAsync } from "../../redux/todoSlice";
const MainPage = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todos); // 이 부분 추가

  useEffect(() => {
    dispatch(getPostsAsync());
  }, [dispatch]);
  return <MainPageTemplate todos = {todos}/>;
};

export default MainPage;

import PropsTest from "./components/PropsTest";
import UserInfo from "./components/UserInfo";

function App() { //npx create-react-app aaaa_bbbb(생성)
  const userList = [
    {username: "aaa", name: "AAA", email: "aaa@gmail.com"},
    {username: "bbb", name: "BBB", email: "bbb@gmail.com"},
    {username: "ccc", name: "CCC", email: "ccc@gmail.com"},
    {username: "ddd", name: "DDD",},
  ];

  return (
    <>
      <PropsTest
       username="aaa"
       name="김준일"
       email="aaa@gmail.com" 
       handlerClick={() => console.log("클릭함!")}
       />
       {['김준일', '김준이', '김준삼']}
       {userList.map(user => 
       (
       <UserInfo username={user.username} name={user.name} email={user.email}/>
       )
       )}
    </>
  );
}

export default App;

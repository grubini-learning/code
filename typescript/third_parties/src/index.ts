import axios from "axios";
import _ from "lodash"; // lodash does not come with a type declaration file
// install with pnpm add --save-dev @lodash/lodash

// Utilize: https://jsonplaceholder.typicode.com/ for API
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

axios
  .get<Post>("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => res.data)
  .then((data) => console.log("data: ", data))
  .catch((error) => console.log("Error! ", error));

axios
  .get<Post[]>("https://jsonplaceholder.typicode.com/posts")
  .then((res) => res.data)
  .then((data) => console.log("data: ", data))
  .catch((error) => console.log("Error! ", error));

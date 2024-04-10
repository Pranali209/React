import Heading from "./Heading";
import Section2 from "./Section2";

function ContextHook2() {
    return ( 
        <>
             <Section2>
                  <Heading>My Profile</Heading>
                  <Post title= "Good Morning , Hello traveller!" body = "Read about my adventures."/>
                  <AllPosts/>
             </Section2>

        </>
     );
}
function AllPosts() {
    return (
      <Section2>
        <Heading>Posts</Heading>
        <RecentPosts />
      </Section2>
    );
  }

  function Post({title , body}) {
    return(
        <Section2 isFancy = {true}>
            <Heading>{title}</Heading>
            <p>{body}</p>
        </Section2>
    )
  }
   function RecentPosts(params) {
     return(
        <Section2>
            <Heading>Recent Posts</Heading>
            <Post  title="Flavors of Lisbon"
        body="...those pastéis de nata!"/>
            <Post title="Buenos Aires in the rhythm of tango"
        body="I loved it!"/>
        </Section2>
     )
   }

export default ContextHook2;
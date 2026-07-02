export default async function page() {

    const url="https://jsonplaceholder.typicode.com/posts";
    const res=await fetch(url);
    const data=await res.json();
    console.log(data);
    return (
        <div>
            <h1>hello by server component</h1>

            <div className="w-200 h-200">
                {
                    data.map((ele,ind)=>(
                        <div key={ind} className="w-200 h-200">
                            <h2>{ele.title}</h2>
                            <p>{ele.body}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}
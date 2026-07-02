import Datacard from './datacard';

export default async function Page(props) {
    const searchParams = await props.searchParams;
    const username = searchParams.name;
    
    if (!username) {
        return <div>data not fetch</div>;
    }

    const res = await fetch(
        `https://api.genderize.io?name=${username}`
    );

    const data = await res.json();

    console.log(data);

    return (
        <div className='grid grid-cols-2 gap-3 h-full'>
          <div>  data fetch server {username}</div>

            <Datacard />
        </div>
    );
}
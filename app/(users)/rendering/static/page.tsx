export const revalidate=40;
export default async function Page() {
    console.log("static doctors");

    return (
        <div className='grid grid-cols-2 gap-3 h-full'>
          <div>  data fetch server </div>
         
        </div>
    );
}

export default async function pages(props) {
    const {slug}=await props.params;
    console.log(slug);
  return (
    <div>pages</div>
  )
}

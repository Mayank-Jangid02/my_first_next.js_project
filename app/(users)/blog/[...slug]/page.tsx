
export default async function pages(props :any) {
    const {slug}=await props.params;
    console.log(slug);
  return (
    <div>pages</div>
  )
}

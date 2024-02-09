function Project({name , description}) {
  return (
    <div className="rounded-md hover:bg-slate-200 p-4 transition-colors duration-300">
      <p className="mb-2 text-medium font-medium leading-none text-gray-800">{name}</p>
      <p className="leading-none text-gray-500">{description}</p>
    </div>
  )
}

export default Project;


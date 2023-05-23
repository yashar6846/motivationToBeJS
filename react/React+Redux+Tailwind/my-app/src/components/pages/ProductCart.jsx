
export const ProductCart = ({prd}) => {
  return (
    <div className="w-1/5 h-[250px] border rounded-lg m-2 flex flex-col">
      <img className="hover:border-indigo-600 w-1/2 h-13 object-cover" src={prd?.image} />
      <div className="text-center">{prd?.name}</div>
      <div className="font-bold text-center">{prd?.price}</div>
      <button className="bg-indigo-300 w-full p-2 text-white">AddBasket</button>
    </div>
  )
}


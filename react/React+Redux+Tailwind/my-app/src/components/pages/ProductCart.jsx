
export const ProductCart = ({prd}) => {
  return (
    <div className="hover:border-indigo-600 w-1/6 h-[350px] border rounded-lg m-4 flex flex-col">
      <img onClick={()=>window.location =`detail/${prd.id}`} className="  h-15 object-cover" src={prd?.image} />
      <div className="text-center">{prd?.name}</div>
      <div className="font-bold text-center">{prd?.price}</div>
      <button className="bg-indigo-300 w-full p-2 text-white">AddBasket</button>
    </div>
  )
}


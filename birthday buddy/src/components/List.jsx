
export const List = ({profile})=>{
    return (
        <article className="flex gap-4">
            <div className="w-[3.5rem] h-[3.5rem] overflow-hidden rounded-[100%]">
            <img src={profile.image} alt={profile.name} className="w-full h-full object-cover"/>
            </div>
            <div className="h-full flex flex-col items-between gap-[0.5rem]">
            <h3 className="!text-[1rem] text-[#0F172A] !font-[500]">{profile.name}</h3>
            <p className="!text-[0.7rem] text-[#64748B]">{profile.age} years</p>
            </div>
        </article>
    )
}
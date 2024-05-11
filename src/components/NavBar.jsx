import world from '../assets/world.svg'
function NavBar(){
    return (
        <div className='flex justify-center gap-3 p-3  bg-navbar'>
            <img src = {world} alt='world image'/>
            <h1 className='text-white '>My Travel Journal</h1>
        </div>
    )

}

export default NavBar
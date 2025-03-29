
const Treepreview = () => {

    const listTree =[
        {
            id: 1,
            name: 'พลูด่างอินเดีย, พลูช้าง',
            scienctific_name: ' Epipremnum aureum (Linden & André) G. S. Bunting',
            image: 'https://down-th.img.susercontent.com/file/bbec6a8128364554f72f153171c0dc16',
            description: 'ดินร่วน ต้องการน้ำปานกลาง ชอบร่มรำไร-แดดปานกลาง',
            family: 'Araceae',
            origin: "อเมริกาใต้"
        },
        {
            id: 2,
            name: 'พลูฉลุ, พลูทะลุ',
            scienctific_name: 'Monstera obliqua Miq',
            image: 'https://www.luckyworm.net/wp-content/uploads/2021/08/%E0%B8%9E%E0%B8%A5%E0%B8%B9%E0%B8%89%E0%B8%A5%E0%B8%B8.jpg',
            description: 'ดินทั่วไป แสงแดดรำไร-ร่ม ความชื้นสูง',
            family: 'Araceae',
            origin: "ประเทศอินเดีย"
        },
        {
            id: 3,
            name: 'เล็บครุฑ',
            scienctific_name: 'Polyscias sp',
            image: 'https://media.istockphoto.com/id/1035083166/th/%E0%B8%A3%E0%B8%B9%E0%B8%9B%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2/ariegated-balfour-aralia-polyscias-sp.jpg?s=612x612&w=0&k=20&c=OYnx5jP_vNrBOMdK_rjIG6Yw-jbb_apaiR272oXo0-I=',
            description: 'ดินร่วนซุยหรือดินปนทราย ระบายน้ำได้ดี น้ำปานกลาง แสงแดดร่มรำไรถึงจัด',
            family: 'ARALIACEAE',
            origin: "หมู่เกาะแปซิฟิกและเอเชียเขตร้อน"
        },
        {
            id: 4,
            name: 'ริบบิ้นชาลี ',
            scienctific_name: 'Callisia repens',
            image: 'https://www.bumbleplants.com/cdn/shop/files/CallisiaRepensPinkPanther_2.jpg?v=1740372452',
            description: 'ดินปลูกแคคตัสผสมกับขุยมะพร้าว แสงแดดร่มรำไร รดน้ำให้พอชุ่ม',
            family: 'Commelinaceae',
            origin: "อเมริกากลางและอเมริกาใต้"
        },
    ]
  return (
        <div className="grid grid-cols-4 w-full gap-4 items-center justify-center max-lg:grid-cols-2 max-md:grid-cols-1">
            {listTree.map((tree) => ( 
                <div key={tree.id} className="flex flex-col min-w-[200px] w-fit min-h-[450px] bg-[#c0cfb2] rounded-2xl justify-between items-center mx-auto p-4 gap-4 drop-shadow-lg">
                    <img src={tree.image} alt={tree.name} className="w-[200px] h-[250px] object-cover object-center rounded-xl hover:scale-110 duration-300 drop-shadow-sm" />
                    <h1 className="text-center font-bold text-nowrap">{tree.name}</h1>
                    <p className="text-center">ตระกูล {tree.family}</p>
                    <p className="text-center max-w-[200px]">{tree.description}</p>
                </div>
            ))}
        </div>
  )
}
export default Treepreview
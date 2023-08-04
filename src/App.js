import {IoMdNutrition} from 'react-icons/io'
import {IoAccessibilitySharp} from 'react-icons/io5'
import {GiBodyHeight, GiNightSleep, GiBrain} from 'react-icons/gi'
import {FaBacteria} from 'react-icons/fa'
import {BsFillLungsFill, BsFacebook, BsInstagram, BsTwitter, BsPinterest} from 'react-icons/bs'
import {FaShieldHalved, FaAngleDown} from 'react-icons/fa6'
import {AiOutlineMail, AiOutlineShoppingCart, AiOutlineSearch} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Hamburger from 'hamburger-react'
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';
import { useRef, useState } from 'react';
import { useEffect } from 'react'


function App() {
  return (
    <div className="App w-full overflow-hidden mx-0 relative">
      <header className='header p-4 bg-[#cde4ea] flex items-center justify-between fixed top-0 right-0 left-0 z-10'>
          <div className='flex h-12'>
            <img alt="" src="logo.png"></img>
            <img alt="" src="gfmt.png"></img>
          </div>
          <div className='justify-center hidden md:flex mx-6'>
              {["Về chúng tôi", "Xuất khẩu", "Liên hệ"].map(i => <><p className='text-center'>{i}</p><div className='mx-2 md:mx-4'></div></>)}
          </div>
          <div className='flex items-center'>       
            <SearchButton/>
            <div className='mx-1.5'></div>
            <HamburgerComponent/>
          </div>
      </header>
      <div className="bg-[url(/public/A.png)] bg-[length:100%_100%] h-[600px] flex justify-center px-12 mt-20">
        <div className='my-24'>  
          <div className='mx-auto'>
            <div className='font-bold text-3xl md:text-4xl text-center'>Grow Grow</div>
            <div className='text-xl mt-5 text-center'>Siro phát triển chiều cao và sức khỏe toàn diện cho trẻ đến từ Nhật Bản</div>
            <button className='mx-auto bg-black text-white w-36 h-12 mt-5 rounded-full flex items-center justify-center border border-black hover:bg-white hover:text-black transition '>
                Mua ngay<span className='ml-2'><AiOutlineShoppingCart/></span>         
            </button>
          </div>
          <div className='md:w-1/2 mx-auto mt-12 md:mt-0 bg-black'><img src="znfnf.png"></img></div>
        </div>
      </div>
      <Wid/>
      <NotableBenefits/>
      <div className='font-bold text-4xl mx-auto text-center mb-8 text-sky-400 mt-20'>Quy cách đóng gói</div>
      <div className='flex md:flex-row flex-col items-center md:justify-between py-4 px-2 md:px-20'>
        <img alt=""  src="gh.png" className='w-2/3 md:w-2/5 order-2 md:order-1 mt-8 md:mt-0'></img>
        <div className='w-full md:w-1/2 md:order-2 order-1 '>
          <div className='flex'>
            {["gói/hộp", "gram/gói"].map(i =>
              <div className='pt-4 w-1/2'>
                <div className='border-l-2 pl-4 border-l-sky-400 text-sky-400 text-3xl font-bold w-1/2 mx-auto'>30</div>
                <div className='mt-3 w-1/2 mx-auto text-lg'>{i}</div>
              </div>
            )}
          </div>
        </div>
      </div>  
      
      <IngredientTab/>
      <Accordion/>
      <footer className='bg-black md:flex justify-around text-white py-6 text-center md:text-start'>
          <div>
              <p>Nhà phân phối: TRƯƠNG THANH TÚ – MẸ VÀ BÉ</p>
              <p>Địa chỉ: 15 Lý Nam Đế, Hoàn Kiếm, Hà Nội</p>
              <p>Hotline: 088 960 3579</p>
          </div>
          <div className='my-6 md:my-0 md:mx-6'>
              <p>KẾT NỐI CHÚNG TÔI QUA</p>
              <div className='flex justify-center md:justify-around mt-2'>
                  <BsFacebook className='cursor-pointer '/>
                  <div className='mx-1 md:mx-0'></div>
                  <BsInstagram className='cursor-pointer '/>
                  <div className='mx-1 md:mx-0'></div>
                  <BsTwitter className='cursor-pointer '/>
                  <div className='mx-1 md:mx-0'></div>
                  <AiOutlineMail className='cursor-pointer '/>
                  <div className='mx-1 md:mx-0'></div>
                  <BsPinterest className='cursor-pointer '/>
              </div>
          </div>
          <div>
              <p>HOTLINE HỖ TRỢ (VIBER, ZALO)</p>
              <p>0983 191 166</p>
          </div>
      </footer>
    </div>
  );
}



function Wid() {
  const data1 = [{logo: <IoMdNutrition/>, text: "Bổ sung dinh dưỡng giúp trẻ phát triển toàn diện nhất"},
                  {logo: <GiBodyHeight/>, text: "Giúp phát triển độ dài xương, phát triển chiều cao cho trẻ"},
                  {logo: <GiBrain/>, text: "Giúp tăng cường phát triển trí não, tăng khả năng tập trung"},
                  {logo: <IoAccessibilitySharp/>, text: "Giúp tăng cường thể lực, sức khỏe cho trẻ"}]
  const data2 = [{logo: <FaShieldHalved/>, text: "Giúp trẻ tăng cường sức đề kháng, hệ miễn dịch của cơ thể"},
                  {logo: <FaBacteria/>, text: "Bổ sung lợi khuẩn tốt cho hệ tiêu hóa"},
                  {logo: <BsFillLungsFill/>, text: "Giúp bổ phổi, tăng cường hệ hô hấp của trẻ, giảm tình trạng viêm phổi, viêm đường hô hấp và ốm vặt"},
                  {logo: <GiNightSleep/>, text: "Giúp trẻ ăn và ngủ ngon hơn"}]
  return (
    <>
      <p className='text-center font-bold text-3xl md:text-4xl z-10 mt-20 text-sky-400'>Grow Grow</p>
      <p className='text-lg text-center mt-4 md:mb-0 mb-20'>Giúp mẹ chăm con nhàn rỗi và mang đến sức khỏe toàn diện cho con</p>
      <div className='md:flex justify-around items-center mx-4 md:mx-12'>
          <WidCol data={data1}/>
          <img alt=""  src="8881630d46e995b7ccf8.jpg" className='md:w-1/3 md:mx-8 my-20 md:mx-0'></img>
          <WidCol data={data2}/>
      </div>
      </>
  )
}

function WidCol(props) {
  return (
    <div className='md:w-1/3 text-center'>    
              {props.data.map(i => 
                  <div className='my-6 md:my-16 md:h-44'>
                          <div className='border-2 text-sky-400 border-sky-400 rounded-full w-16 aspect-square flex justify-center items-center text-4xl mx-auto'>{i.logo}</div>
                          <div className='md:w-3/4 mx-auto mt-4'>{i.text}</div>
                  </div>
              )}  
    </div>
  )
}

function SearchButton() {
  const [toggle, setToggle] = useState(false)
  let style
  toggle ? style = "w-40 md:w-60 pl-2 border" : style = "w-0 pl-0"
  const ref = useRef(null)
  useEffect(() => {
      document.addEventListener("click", searchOff, true)
  }, [])
  const searchOff = (e) => {
    !ref.current.contains(e.target) && setToggle(false)
  }
  return (
    <>
      <button onClick={() => setToggle(true)}><AiOutlineSearch className='text-2xl'/></button>
      <form className='fixed right-24 md:right-32 top-7'>
        <input ref={ref} className={'border-black rounded-lg transition-[width] ' + style}></input>
      </form>
    </>
  )
}

function HamburgerComponent() {
  const [isOpen, setOpen] = useState(false)
  let status
  isOpen ? status = "" : status = "hidden"
  return (
    <>
      <div className="z-10 relative"><Hamburger toggled={isOpen} toggle={setOpen} size={20}/></div>
      <div className={'fixed top-0 bottom-0 left-0 right-0 bg-[#cde4ea] flex justify-center items-center ' + status}>
        <div>
        {["Về chúng tôi", "Xuất khẩu", "Liên hệ"].map(i => <><p>{i}</p><div className='my-6'></div></>)}
        </div>
      </div>
    </>
  )
}
function NotableBenefits() {
  const texts = [{img: "gdfg.png", id: 1, text: "Sản phẩm hàng đầu của Nhật Bản về SỰ PHÁT TRIỂN TOÀN DIỆN dặc biệt là SỰ PHÁT TRIỂN CHIỀU CAO của trẻ với tổng hợp 22 thành phần chọn lọc."},
                 {img: "sdfg.png", id: 2, text: "Các chuyên gia Nhật Bản đã xây dựng một công thức hoàn hảo không chỉ tập trung vào Canxi mà còn có các thành phần khác như Men chứa kẽm, Peptide lòng đỏ trứng, vitamin D3... Sự kết hợp này sẽ giúp xương phát triển tối đa để tăng chiều cao cho trẻ và ưu việt hơn rất nhiều so với những sản phẩm tăng cường chiều cao thông thường chỉ đơn thuần tập trung vào 1 thành phần tốt cho xương là canxi."},
                 {img: "Artboard 6.png", id: 3, text: "Đây là một sản phẩm với công thức không chỉ giúp hấp thụ nhóm các chất dinh dưỡng để tăng chiều cao từ sản phẩm mà còn hấp thụ canxi tự nhiên (thông qua thức ăn hàng ngày: trứng, sữa, phomai, tôm, cua, …) bằng cách đề cao nhóm 3 lợi khuẩn axit lactic, Bifidobacteria và Oligosaccharide giúp trẻ có 1 hệ tiêu hóa khỏe mạnh hấp thu & chuyển hóa các chất dinh dưỡng ở mức cao nhất. Sức khỏe đường ruột chiếm 70% sức khỏe tổng thể nên đây là yếu tố cốt lõi giúp trẻ có 1 cơ thể khỏe mạnh & tăng chiều cao tối đa"},
                 {img: "kid-e1604326070805.png", id: 4, text: "Thành phần có vitamin tổng hợp, keo ong… và các dưỡng chất cần thiết khác giúp trẻ có có hệ hô hấp và cơ thể khỏe mạnh, phòng ngừa sự tấn công của các loại vi khuẩn và vi rút, tăng cường sức đề kháng và khả năng miễn dịch."},
                 {img: "outside-the-box-cropped.png", id: 5, text: " Sản phẩm giúp trẻ không chỉ giúp trẻ phát triển về thể chất, chiều cao mà còn giúp tăng cường trí nhớ, cải thiện trí thông minh nhờ DHA/EPA cải thiện chức năng não bộ, Phosphatidylserin phát triển và kích hoạt các tế bào não."},
                 {img: "drop-5818339_1280.png", id: 6, text: "Mùi vị thơm ngon, độ ngọt vừa phải và không có đường có thể gây sâu răng cho trẻ; Bào chế dạng nước có khả năng hấp thu tốt nhất cho cơ thể so với các dạng bào chế khác; 1 gói 30ml tiện lợi để sử dụng và bảo quản."},
                 {img: "gmp-logo.png", id: 7, text: "Sản xuất tại nhà máy đạt chuẩn GMP có tiêu chuẩn chất lượng khắt khe về nguyên liệu, máy móc, công nghệ, quy trình sản xuất và chất lượng thành phẩm với đội ngũ chuyên gia hàng đầu nghiên cứu về nguồn dinh dưỡng & phát triển toàn diện của trẻ"}]
  return (
    <div className='mt-16'>
          {texts.map(i =>
            <div className={'py-8 md:flex justify-around items-center h-full bg-[#c8ddfa] border-b border-b-black '}>
              <div className={i.id % 2 === 0 ? 'mx-auto md:mx-0 py-8 h-1/2 md:h-4/5 w-1/2 md:w-1/3 flex items-center justify-center' :
               'mx-auto md:mx-0 py-8 h-1/2 md:h-4/5 order-2 w-1/2 md:w-1/3 flex items-center justify-center'}>
                <img alt="" src={i.img}></img>
              </div>
              <div className='md:w-1/3 '>
                <div className='font-bold text-3xl md:text-4xl mb-8 text-center md:text-start'>Grow Grow có gì nổi bật?</div>
                <div className='text-center md:text-justify '>{i.text}</div>
              </div>
            </div>)}
    </div>
  )
}
function Accordion() {
  return (
      <div className='md:w-3/5 mx-auto my-12'>
        <div className='flex justify-between items-center mx-4 mt-8  text-sky-400' >
          <div className='font-bold text-xl md:text-2xl'>Cách sử dụng</div>
          <div className='h-[2.5px] flex-1 mx-4  bg-sky-400'></div>
        </div>
        <div className="px-2 mx-2">
          <p className='pt-4'>• Liều dùng: 1 gói 1 ngày.</p>
          <p>• Nên uống buổi sáng sau hoặc trước khi ăn 30 phút đến 1 tiếng.</p>
          <p>• Nên sử dụng theo liệu trình tối thiểu 3 đến 5 tháng để đạt hiệu quả tối đa.</p>
          <p className='pb-4'>• Sản phẩm có thể sử dụng duy trì thường xuyên mà không gây tác dụng phụ.</p>
        </div>
      </div>
  )
}

function IngredientTab() {
  const ingredients = [
        {ingredient: "Canxi lactate", amount: "30"},
        {ingredient: "Vitamin D3 (0,25%)", amount: "2"},
        {ingredient: "Peptide lòng đỏ trứng", amount: "10"},
        {ingredient: "Men chứa kẽm (10%)", amount: "20"},
        {ingredient: "Magiê sunfat", amount: "80"},
        {ingredient: "Axit folic", amount: "0,2"},
        {ingredient: "Dầu cá tinh luyện (DHA/EPA)", amount: "46,7515"},
        {ingredient: "L-ornithine hydrochloride", amount: "10"},
        {ingredient: "Protein", amount: "250"},
        {ingredient: "Mật ong tinh khiết", amount: "4500"},
        {ingredient: "Keo ong", amount: "30"},
        {ingredient: "Chiết xuất Phosphatidylserin (10:1)", amount: "5"},
        {ingredient: "Vi khuẩn axit lactic", amount: "4,5"},
        {ingredient: "Oligosaccharide", amount: "6300"},
        {ingredient: "Vitamin A (10%)", amount: "12"},
        {ingredient: "Vitamin C", amount: "10"},
        {ingredient: "Vitamin E", amount: "2"},
        {ingredient: "Vitamin B1", amount: "2"},
        {ingredient: "Vitamin B2", amount: "2"},
        {ingredient: "Vitamin B6", amount: "2"},
        {ingredient: "Vitamin B12 (0,1%)", amount: "2"},
  ]
      return (
        <>
        <p className='text-center font-bold text-3xl md:text-4xl  mb-12 z-10 mt-20 text-sky-400'>Thành phần dinh dưỡng</p>
        <div id="ingredients" className='md:w-3/5 mx-auto'>
            <div className='flex justify-between font-bold px-4 py-4 text-white rounded-t-xl bg-sky-400 items-center'>
                <p>Thành phần </p>
                <p>Hàm lượng (mg/gói)</p>
            </div>
            <div className='h-[500px] overflow-y-scroll'>
            {ingredients.map(i =>
              <>
                <div className='flex justify-between border-b py-4 px-4'>
                      <p>{i.ingredient}</p>
                      <p>{i.amount}</p>
                </div>
              </>
            )}
            </div>
          </div>
        </>
      )
}

export default App;

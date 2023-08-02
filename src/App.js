import {IoMdNutrition} from 'react-icons/io'
import {IoAccessibilitySharp} from 'react-icons/io5'
import {GiBodyHeight, GiNightSleep, GiBrain} from 'react-icons/gi'
import {FaBacteria} from 'react-icons/fa'
import {BsFillLungsFill, BsFacebook, BsInstagram, BsTwitter, BsPinterest} from 'react-icons/bs'
import {FaShieldHalved, FaAngleDown} from 'react-icons/fa6'
import {AiOutlineMail, AiOutlineShoppingCart} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import Hamburger from 'hamburger-react'
import 'swiper/css';
import 'swiper/css/pagination';
import './App.css';
import { useState } from 'react';


function App() {
  return (
    <div className="App w-full overflow-hidden mx-0 relative">
      <header className='header p-4 bg-[#cde4ea] flex items-center md:justify-around justify-between fixed top-0 right-0 left-0 z-10'>
          <img alt="" src="logo.png"></img>
          <div className='justify-center hidden md:flex'>
              {["Về Chúng Tôi", "Từ Nông Trường Đến Sản phẩm", "Ngôi nhà dinh dưỡng", 
              "Dấu ấn Tiên Phong", "Xuất khẩu", "Liên hệ"].map(i => <><p>{i}</p><div className='mx-2 md:mx-4'></div></>)}
          </div>
          <HamburgerComponent/>
      </header>
      <div className="bg-[url(/public/A.png)] bg-[length:100%_100%] h-[600px] flex justify-center px-12 mt-20">
        <div className='my-24'>  
          <div className='mx-auto'>
            <div className='font-bold text-3xl md:text-4xl text-center'>Grow Grow</div>
            <div className='text-xl mt-5 text-center'>Siro phát triển chiều cao và sức khỏe toàn diện cho trẻ đến từ Nhật Bản</div>
              <button  
                  className='mx-auto bg-black text-white w-36 h-12 mt-5 rounded-full flex items-center justify-center border border-black hover:bg-white hover:text-black transition '>
                    Mua ngay<span className='ml-2'><AiOutlineShoppingCart/></span>         
              </button>
          </div>
          <div className='md:w-1/2 mx-auto mt-12 md:mt-0 bg-black'><img src="znfnf.png"></img></div>
        </div>
      </div>

      <p className='text-center font-bold text-3xl md:text-4xl z-10 mt-20 text-blue-800'>Grow Grow</p>
      <p className='text-lg text-center mt-4 md:mb-0 mb-20'>Giúp mẹ chăm con nhàn rỗi và mang đến sức khỏe toàn diện cho con</p>
      <div className='md:flex justify-around items-center mx-4 md:mx-12'>
          <div className='md:w-1/3 text-end'>
            <div className='my-6 flex items-center'>
              <div className='w-3/4'>Bổ sung dinh dưỡng giúp trẻ phát triển toàn diện nhất</div>
              <div className='border-2 text-blue-800 border-blue-800 rounded-full w-16 aspect-square ml-4 flex justify-center items-center text-4xl'><IoMdNutrition/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4'>Giúp phát triển độ dài xương, phát triển chiều cao cho trẻ</div>
              <div className='border-2 text-blue-800 border-blue-800 border-black rounded-full w-16 aspect-square ml-4 flex justify-center items-center text-4xl'><GiBodyHeight/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4'>Giúp tăng cường phát triển trí não, tăng khả năng tập trung</div>
              <div className='border-2 text-blue-800 border-blue-800 border-black rounded-full w-16 aspect-square ml-4 flex justify-center items-center text-4xl'><GiBrain/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4'>Giúp tăng cường thể lực, sức khỏe cho trẻ</div>
              <div className='border-2 text-blue-800 border-blue-800 border-black rounded-full w-16 aspect-square ml-4 flex justify-center items-center text-4xl'><IoAccessibilitySharp/></div>
            </div>
          </div>
          <img alt=""  src="8881630d46e995b7ccf8.jpg" className='md:w-1/3 md:mx-8 my-20 md:mx-0'></img>
          <div className='md:w-1/3'>
          <div className='my-6 flex items-center'>
              <div className='w-3/4 order-2'>Giúp trẻ tăng cường sức đề kháng, hệ miễn dịch của cơ thể</div>
              <div className='border-2 text-blue-800 border-blue-800 border-black rounded-full w-16 aspect-square mr-4 flex justify-center items-center text-4xl'><FaShieldHalved/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4 order-2'>Bổ sung lợi khuẩn tốt cho hệ tiêu hóa</div>
              <div className='border-2 text-blue-800 border-blue-800 border-black rounded-full w-16 aspect-square mr-4 flex justify-center items-center text-4xl'><FaBacteria/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4 order-2'>Giúp bổ phổi, tăng cường hệ hô hấp của trẻ, giảm tình trạng viêm phổi, viêm đường hô hấp và ốm vặt</div>
              <div className='border-2 text-blue-800 border-blue-800 border-black rounded-full w-16 aspect-square mr-4 flex justify-center items-center text-4xl'><BsFillLungsFill/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4 order-2'>Giúp trẻ ăn và ngủ ngon hơn</div>
              <div className='border-2 text-blue-800 border-blue-800 border-black rounded-full w-16 aspect-square mr-4 flex justify-center items-center text-4xl'><GiNightSleep/></div>
            </div>
          </div>
      </div>
      <NotableBenefits/>
      <div className='font-bold text-4xl mx-auto text-center mb-8 text-blue-800 mt-20'>Quy cách đóng gói</div>
      <div className='flex md:flex-row flex-col items-center md:justify-between py-4 px-2 md:px-20'>
        <img alt=""  src="gh.png" className='w-2/3 md:w-2/5 order-2 md:order-1 mt-8 md:mt-0'></img>
        <div className='w-full md:w-1/2 md:order-2 order-1 '>
          <div className='flex'>
            <div className='pt-4 w-1/2'>
              <div className='border-l-2 pl-4 border-l-blue-800 text-blue-800 text-3xl font-bold w-1/2 mx-auto'>30</div>
              <div className='mt-3 w-1/2 mx-auto text-lg'>gói/hộp</div>
            </div>
            <div className='pt-4 w-1/2'>
              <div className='border-l-2 pl-4 border-l-blue-800 text-blue-800 text-3xl font-bold w-1/2 mx-auto'>30</div>
              <div className='mt-3 w-1/2 mx-auto text-lg'>gram/gói</div>
            </div>
          </div>
        </div>
      </div>


      
      <p className='text-center font-bold text-3xl md:text-4xl  mb-12 z-10 mt-20 text-blue-800'>Thành phần dinh dưỡng</p>
      <IngredientTab/>
      <Accordion/>
      

      
 
      <footer className='bg-black md:flex justify-around text-white py-6 text-center md:text-start'>
          <div>
              <p>Nhà phân phối: TRƯƠNG THANH TÚ – MẸ VÀ BÉ</p>
              <p>Địa chỉ: 15 Lý Nam Đế, Hoàn Kiếm, Hà Nội</p>
              <p>Hotline: 088 960 3579</p>
          </div>
          <div className='my-6 md:my-0'>
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

function HamburgerComponent() {
  const [isOpen, setOpen] = useState(false)
  let width, mask;
  if (isOpen) {
    width = "w-1/2"
    mask = ""
  } else {
    width = "w-0"
    mask = "hidden"
  }
  return (
    <div className="md:hidden">
      <Hamburger toggled={isOpen} toggle={setOpen} size={20}/>
      <div className={'fixed top-0 bottom-0 right-0 left-0 ' + mask} onClick={() => setOpen(false)}></div>
                <div className={'fixed top-[80px] bottom-0 right-0 h-[100vh] transition-[width] bg-[#cde4ea] ' + width}>
                {["Trang chủ", "Giới thiệu", "Sản phẩm", "Tin tức", "Liên hệ"].map(i => 
                <div className='m-2'>{i}</div>)}
      </div>
    </div>
  )
}
function NotableBenefits() {

  const texts = [{color:"text-white", img: "gdfg.png", bg:"bg-red-600", id: 1, text: "Sản phẩm hàng đầu của Nhật Bản về SỰ PHÁT TRIỂN TOÀN DIỆN dặc biệt là SỰ PHÁT TRIỂN CHIỀU CAO của trẻ với tổng hợp 22 thành phần chọn lọc."},
                 {color: "text-white", img: "sdfg.png", bg:"bg-orange-500", id: 2, text: "Các chuyên gia Nhật Bản đã xây dựng một công thức hoàn hảo không chỉ tập trung vào Canxi mà còn có các thành phần khác như Men chứa kẽm, Peptide lòng đỏ trứng, vitamin D3... Sự kết hợp này sẽ giúp xương phát triển tối đa để tăng chiều cao cho trẻ và ưu việt hơn rất nhiều so với những sản phẩm tăng cường chiều cao thông thường chỉ đơn thuần tập trung vào 1 thành phần tốt cho xương là canxi."},
                 {color: "", img: "Artboard 6.png", bg:"bg-yellow-300", id: 3, text: "Đây là một sản phẩm với công thức không chỉ giúp hấp thụ nhóm các chất dinh dưỡng để tăng chiều cao từ sản phẩm mà còn hấp thụ canxi tự nhiên (thông qua thức ăn hàng ngày: trứng, sữa, phomai, tôm, cua, …) bằng cách đề cao nhóm 3 lợi khuẩn axit lactic, Bifidobacteria và Oligosaccharide giúp trẻ có 1 hệ tiêu hóa khỏe mạnh hấp thu & chuyển hóa các chất dinh dưỡng ở mức cao nhất. Sức khỏe đường ruột chiếm 70% sức khỏe tổng thể nên đây là yếu tố cốt lõi giúp trẻ có 1 cơ thể khỏe mạnh & tăng chiều cao tối đa"},
                 {color: "", img: "kid-e1604326070805.png", bg:"bg-lime-400", id: 4, text: "Thành phần có vitamin tổng hợp, keo ong… và các dưỡng chất cần thiết khác giúp trẻ có có hệ hô hấp và cơ thể khỏe mạnh, phòng ngừa sự tấn công của các loại vi khuẩn và vi rút, tăng cường sức đề kháng và khả năng miễn dịch."},
                 {color:"text-white", img: "outside-the-box-cropped.png", bg:"bg-indigo-700", id: 5, text: " Sản phẩm giúp trẻ không chỉ giúp trẻ phát triển về thể chất, chiều cao mà còn giúp tăng cường trí nhớ, cải thiện trí thông minh nhờ DHA/EPA cải thiện chức năng não bộ, Phosphatidylserin phát triển và kích hoạt các tế bào não."},
                 {color:"text-white", img: "drop-5818339_1280.png", bg:"bg-blue-900", id: 6, text: "Mùi vị thơm ngon, độ ngọt vừa phải và không có đường có thể gây sâu răng cho trẻ; Bào chế dạng nước có khả năng hấp thu tốt nhất cho cơ thể so với các dạng bào chế khác; 1 gói 30ml tiện lợi để sử dụng và bảo quản."},
                 {color:"text-white", img: "gmp-logo.png", bg:"bg-purple-700", id: 7, text: "Sản xuất tại nhà máy đạt chuẩn GMP có tiêu chuẩn chất lượng khắt khe về nguyên liệu, máy móc, công nghệ, quy trình sản xuất và chất lượng thành phẩm với đội ngũ chuyên gia hàng đầu nghiên cứu về nguồn dinh dưỡng & phát triển toàn diện của trẻ"}]
  return (
    <>
      <Swiper modules={[Pagination]} className="mySwiper h-[600px] md:h-[500px]" pagination={{clickable: true,}}>
          {texts.map(i => <SwiperSlide>
            <div className={i.color + ' md:flex justify-around items-center h-full text-center md:text-justify ' + i.bg}>
              <img alt="" src={i.img} className={i.id % 2 === 0 ? 'object-cover mx-auto md:mx-0 py-8 h-1/2 md:h-4/5'
              : 'object-cover mx-auto md:mx-0 py-8 h-1/2 md:h-4/5 order-2'}></img>
              <div className='md:w-1/3'>{i.text}</div>
            </div>
          </SwiperSlide>)}
      </Swiper>
    </>
  )
}
function Accordion() {
  const [isOpen, setOpen] = useState(false)
  let height, direction;
  if (isOpen) {
      height = "h-48 md:h-28"
      direction = "rotate-180"
  } else {
      height = "h-0"
      direction = "rotate-0"
  }
  return (
      <div className='md:w-3/5 mx-auto mb-8 mt-12'>
        <div className='flex justify-between items-center cursor-pointer mx-4 mt-8  text-blue-800' 
        onClick={() => setOpen(!isOpen)}>
          <div className='font-bold text-xl md:text-2xl'>Cách sử dụng</div>
          <div className='h-[2.5px] flex-1 mx-4  bg-blue-800'></div>
          <FaAngleDown className={"transition " + direction}/>
        </div>
        <div className={"px-2 transition-[height] overflow-hidden mx-2 " + height}>
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
        <div id="ingredients" className='md:w-3/5 mx-auto'>
            <div className='flex justify-between font-bold px-4 py-4 text-white rounded-t-xl bg-blue-800 items-center'>
                <p>Thành phần </p>
                <p>Hàm lượng (mg)</p>
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
      )
}

export default App;

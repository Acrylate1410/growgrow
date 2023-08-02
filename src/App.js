import {IoMdNutrition} from 'react-icons/io'
import {IoAccessibilitySharp} from 'react-icons/io5'
import {GiBodyHeight, GiNightSleep, GiBrain} from 'react-icons/gi'
import {FaBacteria} from 'react-icons/fa'
import {BsFillLungsFill, BsFacebook, BsInstagram, BsTwitter, BsPinterest} from 'react-icons/bs'
import {FaShieldHalved, FaAngleDown} from 'react-icons/fa6'
import {AiOutlineMail, AiOutlineShoppingCart} from 'react-icons/ai'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import Hamburger from 'hamburger-react'
import 'swiper/css';
import 'swiper/css/navigation';
import './App.css';
import { useRef, useState } from 'react';


function App() {

  return (
    <div className="App w-full overflow-hidden mx-0 relative">
      <header className='p-4 bg-[#cde4ea] flex items-center md:justify-around justify-between'>
          <img src="logo.png"></img>
          <div className='justify-center hidden md:flex'>
              {["Trang chủ", "Giới thiệu", "Sản phẩm", "Tin tức"].map(i => <><p>{i}</p><div className='mx-2 md:mx-4'></div></>)}
              <p>Liên hệ</p>
          </div>
          <HamburgerComponent/>
      </header>
      <div className="bg-[url(/public/A.png)] bg-[length:100%_100%] h-[600px] flex justify-center px-12">
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
      <p className='text-center font-bold text-3xl md:text-4xl  mb-12 z-10 mt-20'>Thành phần và hàm lượng</p>
      <IngredientTab/>
      <p className='text-center font-bold text-3xl md:text-4xl  my-12 z-10 mt-20'>Công dụng của Grow Grow</p>
      <div className='md:flex justify-around items-center mx-4 md:mx-12'>
          <div className='md:w-1/3 text-end'>
            <div className='my-6 flex items-center'>
              <div className='w-3/4'>Bổ sung dinh dưỡng giúp trẻ phát triển toàn diện nhất</div>
              <div className='border-2 text-sky-400 border-sky-400 rounded-full w-16 aspect-square ml-4 flex justify-center items-center text-4xl'><IoMdNutrition/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4'>Giúp phát triển độ dài xương, phát triển chiều cao cho trẻ</div>
              <div className='border-2 text-sky-400 border-sky-400 border-black rounded-full w-16 aspect-square ml-4 flex justify-center items-center text-4xl'><GiBodyHeight/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4'>Giúp tăng cường phát triển trí não, tăng khả năng tập trung</div>
              <div className='border-2 text-sky-400 border-sky-400 border-black rounded-full w-16 aspect-square ml-4 flex justify-center items-center text-4xl'><GiBrain/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4'>Giúp tăng cường thể lực, sức khỏe cho trẻ</div>
              <div className='border-2 text-sky-400 border-sky-400 border-black rounded-full w-16 aspect-square ml-4 flex justify-center items-center text-4xl'><IoAccessibilitySharp/></div>
            </div>
          </div>
          <img  src="8881630d46e995b7ccf8.jpg" className='md:w-2/5 md:mx-8'></img>
          <div className='md:w-1/3'>
          <div className='my-6 flex items-center'>
              <div className='w-3/4 order-2'>Giúp trẻ tăng cường sức đề kháng, hệ miễn dịch của cơ thể</div>
              <div className='border-2 text-sky-400 border-sky-400 border-black rounded-full w-16 aspect-square mr-4 flex justify-center items-center text-4xl'><FaShieldHalved/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4 order-2'>Bổ sung lợi khuẩn tốt cho hệ tiêu hóa</div>
              <div className='border-2 text-sky-400 border-sky-400 border-black rounded-full w-16 aspect-square mr-4 flex justify-center items-center text-4xl'><FaBacteria/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4 order-2'>Giúp bổ phổi, tăng cường hệ hô hấp của trẻ, giảm tình trạng viêm phổi, viêm đường hô hấp và ốm vặt</div>
              <div className='border-2 text-sky-400 border-sky-400 border-black rounded-full w-16 aspect-square mr-4 flex justify-center items-center text-4xl'><BsFillLungsFill/></div>
            </div>
            <div className='my-6 flex items-center'>
              <div className='w-3/4 order-2'>Giúp trẻ ăn và ngủ ngon hơn</div>
              <div className='border-2 text-sky-400 border-sky-400 border-black rounded-full w-16 aspect-square mr-4 flex justify-center items-center text-4xl'><GiNightSleep/></div>
            </div>
          </div>
      </div>
      <div className='bg-[url(./background/Untitled-4.jpg)] bg-cover py-24 mt-20 px-2 md:px-12 relative'>
      <div className='top-0 bottom-0 left-0 right-0 absolute backdrop-blur-[1.5px] z-0'></div>
      <div className='text-center font-bold text-4xl  mb-12 z-10 relative'>Ưu điểm nổi bật</div>
      <NotableBenefits/>
      </div>
      <p className='text-center font-bold text-4xl  my-12 z-10 mt-20'>Tư vấn bán hàng và sử dụng</p>
      <div className='md:flex justify-around'>
        <div className='md:w-2/5 mt-[6%]'>
            <Accordion summary="Quy cách sản phẩm"/>
            <Accordion summary="Cách sử dụng"/>
            <Accordion summary="Đối tượng sử dụng"/>
            <Accordion summary="Xuất xứ và nhà máy sản xuất"/>
        </div>
        <div className='md:w-2/5 mx-8 md:mx-0 mt-12 md:mt-0'><img  src="gh.png"></img></div>
      </div>

      <div className='flex md:flex-row flex-col items-center md:justify-between mt-12 py-16 px-2 md:px-20 bg-[#c8ddfa]'>
        <img  src="agd.png" className='w-2/3 md:w-2/5 order-2 md:order-1 mt-8 md:mt-0'></img>
        <div className='md:w-1/2 md:order-2 order-1 '>
          <div className='font-bold text-4xl mx-auto text-center md:text-start mt-8 mb-4 md:mt-0'>Grow Grow</div>
          <div className='text-center md:text-justify'>Các bậc phụ huynh hãy là những ông bố bà mẹ thông thái giúp con nâng cao sức đề kháng cũng như có thể phát triển tốt về chiều cao, thể chất và trí tuệ thông qua một chế độ dinh dưỡng hợp lý và đúng cách. Sản phẩm Grow Grow dạng siro tổng hợp từ 22 thành phần thiết yếu chính là sự lựa chọn hoàn hảo và đầy đủ nhất về dinh dưỡng cho sự phát triển của trẻ.</div>
          <button className='mx-auto md:mx-0 bg-black text-white w-36 h-12 mt-6 rounded-full flex items-center justify-center border border-black hover:bg-[#c8ddfa] hover:text-black transition '>
            Mua ngay<span className='ml-2'><AiOutlineShoppingCart/></span>
          </button>
        </div>
      </div>
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
  const [seeMore, setSeeMore] = useState("");
  let mask;
  if (seeMore === "") {
    mask = "hidden"
  } else {
    mask = ""
  }
  const texts = [{id: "01", text: "Sản phẩm hàng đầu của Nhật Bản về SỰ PHÁT TRIỂN TOÀN DIỆN dặc biệt là SỰ PHÁT TRIỂN CHIỀU CAO của trẻ với tổng hợp 22 thành phần chọn lọc."},
                 {id: "02", text: "Các chuyên gia Nhật Bản đã xây dựng một công thức hoàn hảo không chỉ tập trung vào Canxi mà còn có các thành phần khác như Men chứa kẽm, Peptide lòng đỏ trứng, vitamin D3... Sự kết hợp này sẽ giúp xương phát triển tối đa để tăng chiều cao cho trẻ và ưu việt hơn rất nhiều so với những sản phẩm tăng cường chiều cao thông thường chỉ đơn thuần tập trung vào 1 thành phần tốt cho xương là canxi."},
                 {id: "03", text: "Đây là một sản phẩm với công thức không chỉ giúp hấp thụ nhóm các chất dinh dưỡng để tăng chiều cao từ sản phẩm mà còn hấp thụ canxi tự nhiên (thông qua thức ăn hàng ngày: trứng, sữa, phomai, tôm, cua, …) bằng cách đề cao nhóm 3 lợi khuẩn axit lactic, Bifidobacteria và Oligosaccharide giúp trẻ có 1 hệ tiêu hóa khỏe mạnh hấp thu & chuyển hóa các chất dinh dưỡng ở mức cao nhất. Sức khỏe đường ruột chiếm 70% sức khỏe tổng thể nên đây là yếu tố cốt lõi giúp trẻ có 1 cơ thể khỏe mạnh & tăng chiều cao tối đa"},
                 {id: "04", text: "Thành phần có vitamin tổng hợp, keo ong… và các dưỡng chất cần thiết khác giúp trẻ có có hệ hô hấp và cơ thể khỏe mạnh, phòng ngừa sự tấn công của các loại vi khuẩn và vi rút, tăng cường sức đề kháng và khả năng miễn dịch. Một cơ thể khỏe mạnh, không đau ốm, hấp thu dưỡng chất tốt mới có thể là một cơ thể cao lớn và phát triển toàn diện"},
                 {id: "05", text: " Sản phẩm giúp trẻ không chỉ giúp trẻ phát triển về thể chất, chiều cao mà còn giúp tăng cường trí nhớ, cải thiện trí thông minh nhờ DHA/EPA cải thiện chức năng não bộ, Phosphatidylserin phát triển và kích hoạt các tế bào não."},
                 {id: "06", text: "Mùi vị thơm ngon, độ ngọt vừa phải và không có đường có thể gây sâu răng cho trẻ; Bào chế dạng nước có khả năng hấp thu tốt nhất cho cơ thể so với các dạng bào chế khác; 1 gói 30ml tiện lợi để sử dụng và bảo quản."},
                 {id: "07", text: "Sản xuất tại nhà máy đạt chuẩn GMP có tiêu chuẩn chất lượng khắt khe về nguyên liệu, máy móc, công nghệ, quy trình sản xuất và chất lượng thành phẩm với đội ngũ chuyên gia hàng đầu nghiên cứu về nguồn dinh dưỡng & phát triển toàn diện của trẻ"}]
  return (
    <>
      <div className={'fixed z-10 top-0 bottom-0 left-0 right-0 bg-black opacity-70 ' + mask} onClick={() => setSeeMore("")}>   
      </div>
      <div className={'flex items-center justify-center text-center px-4 rounded-2xl fixed z-20 md:top-[25%] md:bottom-[25%] top-[10%] bottom-[10%] left-[10%] right-[10%] bg-white ' + mask}>{seeMore}</div>
      <Swiper slidesPerView={2} spaceBetween={10}  navigation={true} modules={[Navigation]} 
          className="mySwiper h-[400px]" breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30
            },
          }}>
            {texts.map(i =>
                <SwiperSlide className='text-center bg-green-100 px-1 md:px-6 rounded-2xl' key={i.id} onClick={() => setSeeMore(i.text)}>
                    <div className='w-12 h-12 rounded-full border-2 border-black flex items-center justify-center mx-auto my-6'>{i.id}</div>
                    <div>{i.text}</div>
                </SwiperSlide>
            )}  
      </Swiper>
    </>
  )
}
function Accordion(props) {
  const [isOpen, setOpen] = useState(false)
  let height, direction;
  if (isOpen) {
      height = "h-min"
      direction = "rotate-180"
  } else {
      height = "h-0"
      direction = "rotate-0"
  }
  return (
      <div>
        <div className='flex justify-between p-4 border border-black items-center cursor-pointer md:ml-16 mx-4 md:mr-0 ' 
        onClick={() => setOpen(!isOpen)}>
          <div className='font-bold'>{props.summary}</div>
          <FaAngleDown className={"transition " + direction}/>
        </div>
        <div>
          {props.summary === "Quy cách sản phẩm" ?
              <div className={"px-2 transition overflow-hidden md:ml-16 mx-4 md:mr-0 " + height}>
                <p className='pt-4'>• Trọng lượng: 30g/gói; 30 gói/hộp (dạng lỏng).</p>
                <p className='pb-4'>• Thời hạn sử dụng: 36 tháng kể từ ngày sản xuất.</p>
              </div>
            : props.summary === "Cách sử dụng" ?
              <div className={"px-2 transition overflow-hidden md:ml-16 mx-4 md:mr-0 " + height}>
                <p className='pt-4'>• Liều dùng: 1 gói 1 ngày.</p>
                <p>• Nên uống buổi sáng sau hoặc trước khi ăn 30 phút đến 1 tiếng.</p>
                <p>• Nên sử dụng theo liệu trình tối thiểu 3 đến 5 tháng để đạt hiệu quả tối đa.</p>
                <p className='pb-4'>• Sản phẩm có thể sử dụng duy trì thường xuyên mà không gây tác dụng phụ.</p>
              </div>
            : props.summary === "Đối tượng sử dụng" ? 
              <div className={"px-2 transition overflow-hidden md:ml-16 mx-4 md:mr-0 " + height}>
                <p className='pt-4'>• Trẻ cần phát triển chiều cao tối đa so với độ tuổi.</p>
                <p>• Trẻ cần có thể lực và trí tuệ tốt để học tập và hoạt động tốt.</p>
                <p>• Trẻ có sức đề kháng và hệ miễn dịch yếu.</p>
                <p>• Trẻ có thể lực kém, còi xương và suy dinh dưỡng.</p>
                <p>• Trẻ không hấp thu được chất dinh dưỡng do hệ tiêu hóa kém.</p>
                <p>• Trẻ cần bổ sung các thành phần và dưỡng chất thiết yếu. </p>
                <p>• Trẻ biếng ăn, ngủ kém.</p>
                <p className='pb-4'>• Trẻ hay ốm vặt.</p>
              </div> : 
              <div className={"px-2 transition overflow-hidden md:ml-16 mx-4 md:mr-0 " + height}>
                <p className='pt-4'>• Xuất xứ: Japan (Nhật Bản)</p>
                <p>• Nhà sản xuất:  Makishokuhin Co., Ltd., Factory</p>
                <p>• Địa chỉ: 3-227-4, Tsushimaya, Higashi-ku, Niigata-shi, Niigata, 950-0801 Japan (Nhật Bản)</p>
                <p>• Nhà phân phối:  Forest. Co., Ltd</p>
                <p>• Địa chỉ: 1301-1, Kano-ko, Kiyotake-cho, Miyazaki-shi, Miyazaki, Japan (Nhật Bản)</p>
              </div>
            }
        </div>
      </div>
  )
}

function IngredientTab() {
  const [selected, setSelected] = useState("Canxi lactate")
  const ingredients = [
        {thumbnail: "Ca.png", ingredient: "Canxi lactate", amount: "30", description: "Canxi là khoáng chất cần thiết và quan trọng đối với sự phát triển răng và xương cho trẻ. Thiếu canxi có thể dẫn đến tình trạng còi xương, chậm lớn và ảnh hưởng đến quá trình phát triển của trẻ."},
        {thumbnail: "D.png", ingredient: "Vitamin D3 (0,25%)", amount: "2", description: "Nghiên cứu khoa học đã chỉ ra vitamin D3 có rất nhiều lợi ích đối với sức khỏe như tăng cường hệ cơ xương khớp, tăng cường hấp thu canxi, nâng cao hệ miễn dịch, cải thiện sức khỏe tim mạch, giảm triệu chứng trầm cảm… Nếu cơ thể không có đủ Vintamin D để hấp thụ canxi, cơ thể sẽ lấy canxi ra khỏi xương, khiến xương trở nên yếu, dễ gãy và tăng nguy cơ loãng xương."},
        {thumbnail: "egg.png", ingredient: "Peptide lòng đỏ trứng", amount: "10", description: "Peptide lòng đỏ trứng được thủy phân protein từ lòng đỏ trứng,  protein này có chất lượng cao vô cùng dồi dào. Việc cung cấp đầy đủ lượng protein cho cơ thể trẻ là rất quan trọng để xây dựng cơ và xương, cũng như duy trì một sức khoẻ tổng thể tốt. Peptide lòng đỏ trứng còn có tác dụng thúc đẩy quá trình phát triển của xương và tăng cường mật độ xương"},
        {thumbnail: "zinc.png", ingredient: "Men chứa kẽm (10%)", amount: "20", description: "Bổ sung hàng tỷ lợi khuẩn và kẽm giúp trẻ ổn định đường tiêu hóa, hết tiêu chảy, trẻ ăn ngon hơn và tăng cường hấp thu dưỡng chất.\nNgoài ra, kẽm cũng tương tác với những hormone quan trọng tham gia vào quá trình tăng trưởng của xương – yếu tố thiết yếu giúp trẻ tăng chiều cao"},
        {thumbnail: "m1.png", ingredient: "Magiê sunfat", amount: "80", description: "Ngoài vai trò chính là phòng ngừa và điều trị co giật ở phụ nữ bị tiền sản giật hoặc sản giật, các chuyên gia y tế còn cho rằng magie sulfat có tác dụng bảo vệ thần kinh thai nhi khi có dự đoán sinh non (dưới 32 tuần của thai kỳ). Cụ thể, magie sulfat có thể làm giảm nguy cơ bại não và rối loạn chức năng vận động thô của trẻ khoảng 30- 40%. Đặc biệt, magie sulfat cũng giúp kéo dài thời gian mang thai lên đến 48 giờ, để có thể áp dụng liệu pháp Corticoid trước khi sinh ở sản phụ tuổi thai khoảng từ 24- 34 tuần có nguy cơ sinh non trong vòng 7 ngày."},
        {thumbnail: "imgsrv.png", ingredient: "Axit folic", amount: "0,2", description: "Axit Folic có vai trò tham gia quá trình tổng hợp AND và các axit amin, là thành phần cấu tạo nên tế bào hồng cầu và nucleoprotein"},
        {thumbnail: "oil.png", ingredient: "Dầu cá tinh luyện (DHA/EPA)", amount: "46,7515", description: "Dầu cá tinh luyện có nhiều lợi ích cho sức khỏe hơn các loại omega-3 có trong một số nguồn thực vật.\nNó giúp phát triển não bộ, tăng cường thị lực, giúp phát triển khung xương khớp của trẻ."},
        {thumbnail: "l.png", ingredient: "L-ornithine hydrochloride", amount: "10", description: "Ornithine là một amino acid không tạo protein có tác dụng thúc đẩy phát triển cơ xương và tiết hormone tăng trưởng."},
        {thumbnail: "protein.png", ingredient: "Protein", amount: "250", description: "Protein đã được chứng minh là mang lại rất nhiều lợi ích cho sức khỏe. Việc bổ sung nhiều protein vào chế độ ăn uống hằng ngày có thể giúp tăng cường sức khỏe tim mạch, hệ tiêu hóa, bổ sung dinh dưỡng tốt cho sự phát triển thể chất của trẻ nhỏ"},
        {thumbnail: "honey-pot-4d7c98d.jpg", ingredient: "Mật ong tinh khiết", amount: "4500", description: "Mật ong được sử dụng để trị ho, tiểu đường, nồng độ cholesterol cao, hen suyễn và sốt. Nó cũng được sử dụng để chữa tiêu chảy, loét miệng trong quá trình điều trị ung thư và loét dạ dày do nhiễm vi khuẩn Helicobacter pylori (H. pylori). Mật ong cũng cung cấp một nguồn năng lượng dồi dào trong khi tập thể dục hoặc ở những người bị suy dinh dưỡng. Uống mật ong pha loãng giúp giảm đau và chữa lành vết thương sau khi cắt amidan."},
        {thumbnail: "bee.png", ingredient: "Keo ong", amount: "30", description: "Nhờ vào lợi thế “dồi dào” trong thành phần, keo ong có thể đem lại nhiều tác dụng đối với sức khỏe của trẻ nhỏ. Nó giúp kháng khuẩn, chống viêm, tốt cho hệ hô hấp, điều hòa hệ miễn dịch của cơ thể."},
        {thumbnail: "download.png", ingredient: "Chiết xuất Phosphatidylserin (10:1)", amount: "5", description: "Phosphatidylserine là chất rất cần thiết cho hoạt động bình thường của màng tế bào thần kinh và kích hoạt Protein kinase C (PKC) có liên quan đến chức năng bộ nhớ."},
        {thumbnail: "lactic.png", ingredient: "Vi khuẩn axit lactic", amount: "4,5", description: "Axit lactic giúp cải thiện chức năng hệ tiêu hóa, bảo vệ và ngăn ngừa các bệnh về đường ruột, kích thích hoạt động hệ miễn dịch và tăng cường tiêu hoá các dạng thức ăn được nhanh và tốt hơn."},
        {thumbnail: "bifido.png", ingredient: "Vi khuẩn Bifidobacteria", amount: "0,05", description: "Khi vào ruột già, lợi khuẩn Bifidobacterium sẽ di chuyển tới vùng niêm mạc đang bị tổn thương và tạo màng nhầy bao phủ các tổn thương đó, đồng thời kích thích niêm mạc ruột sản xuất ra các kháng thể IgAs. Các kháng thể được tiết ra sẽ bám dính vào các kháng nguyên lạ bao gồm vi khuẩn, virus, nấm, độc tố…và vô hiệu hóa chúng. Giúp ngăn chặn sự tấn công của vi khuẩn và virus một cách hiệu quả nhất, bảo vệ đường ruột khỏe mạnh."},
        {thumbnail: "oligo.png", ingredient: "Oligosaccharide", amount: "6300", description: "Oligosaccharide được sử dụng làm chất làm ngọt thay cho đường, đây là lựa chọn tốt nhất tạo vị ngọt ngon và không bị pha loãng; giúp giảm lượng đường trong máu; có thể yên tâm sử dụng cho trẻ nhỏ mà không sợ sâu răng.\nBên cạnh đó, Oligosaccharide có các tác dụng như:", bullet: ["Cải thiện môi trường đường ruột: Oligosaccharide đóng vai trò là thức ăn cho vi khuẩn tốt như vi khuẩn axit lactic và bifidobacteria. Do đó, vi khuẩn axit lactic trong ruột trở nên hoạt động và môi trường đường ruột được phát huy hết công dụng;", "Tăng khả năng miễn dịch."]},
        {thumbnail: "20190716_100859_962633_vitamin-a.max-800x800.jpg", ingredient: "Vitamin A (10%)", amount: "12", description: "Vitamin A đóng vai trò quan trọng trong nhiều quá trình sinh lý như duy trì chức năng của biểu mô (da, niêm mạc đường hô hấp, ruột, bàng quang, vùng tai trong và mắt), hỗ trợ thay thế tế bào da, hỗ trợ thị giác trong những môi trường thiếu ánh sáng, duy trì hệ miễn dịch tốt, hỗ trợ sự phát triển và sinh sản."},
        {thumbnail: "20211124_131616_584269_vitamin-c-giup-dep-.max-1800x1800.jpg", ingredient: "Vitamin C", amount: "10", description: "Vitamin C đóng vai trò thiết yếu giúp thúc đẩy hệ miễn dịch trong cơ thể giúp bạn được khỏe mạnh hơn, tham gia vào quá trình sinh tổng hợp collagen, góp phần chữa lành vết thương và chống oxy hóa."},
        {thumbnail: "uong-vitamin-e-co-tac-dung-gi-vitamin-e-loai-nao-tot-dang-dung-nhat-hien-nay-09092019172339.jpg", ingredient: "Vitamin E", amount: "2", description: "Vitamin E là chất chống oxy hóa góp phần quan trọng trong việc ngăn chặn quá trình lão hóa da, duy trì làn da khỏe mạnh. Ngoài ra vitamin E còn giúp cải thiện thị lực, giúp mắt sáng khỏe."},
        {thumbnail: "istockphoto-1441466215-170667a.jpg", ingredient: "Vitamin B1", amount: "2", description: "Vitamin B1 có vai trò trong chuyển hóa thức ăn thành năng lượng cho cơ thể, ngoài ra chúng còn tác động lên cấu trúc và chức năng của não"},
        {thumbnail: "depositphotos_121546176-stock-illustration-vitamin-b2-gold-icon-riboflavin.png", ingredient: "Vitamin B2", amount: "2", description: "Vitamin B2 hay còn gọi là riboflavin, là một trong những vitamin nhóm B, hoạt động như một chất chống oxy hóa trong cơ thể. Vitamin B2 duy trì các tế bào máu khỏe mạnh, tăng cường năng lượng, tạo điều kiện trao đổi chất lành mạnh, ngăn ngừa tổn thương do các gốc tự do gây ra."},
        {thumbnail: "istockphoto-1441183051-612x612.jpg", ingredient: "Vitamin B6", amount: "2", description: "Tất cả các vitamin B, bao gồm vitamin B6, đóng một vai trò thiết yếu trong một loạt các chức năng thể chất và tâm lý. Chúng giúp duy trì chức năng thần kinh, chức năng gan, trao đổi chất, tăng cường năng lượng cũng như tốt cho da, tóc, móng của bạn."},
        {thumbnail: "istockphoto-1128321835-612x612.jpg", ingredient: "Vitamin B12 (0,1%)", amount: "2", description: "Vitamin B12 đóng một vai trò quan trọng trong việc tạo tế bào hồng cầu và giúp chức năng não bộ hoạt động bình thường."},
  ]
      return (
        <div id="ingredients" className=' md:flex'>
          <div className='md:w-1/2'>
            <div className='flex justify-between font-bold mx-2 md:mx-12 px-4 pb-8 mb-2 border-b-4 border-b-black '>
                <p>Thành phần </p>
                <p>Hàm lượng (mg)</p>
            </div>
            <div className='h-[300px] overflow-y-scroll'>
            {ingredients.map(i =>
              <>
                    <div className={i.ingredient !== selected 
                        ? 'flex justify-between border-b py-4 mx-2 md:mx-12 px-4 hover:bg-black hover:text-white transition cursor-pointer'
                        : 'flex justify-between border-b py-4 mx-2 md:mx-12 px-4 bg-black text-white cursor-pointer'} onClick={() => setSelected(i.ingredient)}>
                          <p>{i.ingredient}</p>
                          <p>{i.amount}</p>
                    </div>

                  </>
            )}
            </div>
          </div>
          <div className='md:w-1/2 mx-2 md:mx-12 md:px-4 pb-8 mb-2'>
            {ingredients.map(i => i.ingredient === selected &&
              <>
                <div className='h-[150px] aspect-square flex items-center mx-auto md:mx-0'><img loading="lazy" src={i.thumbnail}></img></div>
                <div className='font-bold text-center md:text-start'>{i.ingredient}</div>
                <div className='my-4 border-l-2 border-l-black pl-4 mx-auto md:mx-0 w-min'>{i.amount + "mg"}</div>
                <div className='text-justify'>{i.description}</div>
                {i.bullet && 
                    <ul className="list-disc">
                        {i.bullet.map(i => <li className='ml-4'>{i}</li>)}
                    </ul>
                }
              </>
              )}
          </div>
        </div>
      )
}

export default App;

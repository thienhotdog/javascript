import { get } from "../api/product";

const AboutPages = {
   async render(id){
        const {data} = await get(id);
        console.log(data[0]);
        return`
            <div class="container mx-auto py-6">
                <div class="grid grid-cols-12 gap-4">
                    <div class="col-span-4 ">
                        <img src="${data[0].img}"/>
                    </div>

                    <div class="col-span-8 ml-16">
                        <p>${data[0].name}</p>
                        <p class="mt-5 text-black font-bold">Giá : <span class="text-red-500 text-2xl"> ${data[0].price} </span> VNĐ</p>
                        <P>
                        Balo công sở nam nữ cao cấp, dành cho người đi làm. Balo có thể đựng được laptop to đến 15,6 inch. Thiết kế gọn nhẹ, tiện lợi khi đi làm hoặc đi công tác. Chất liệu vải tốt, đàn hồi cao, rất bền và đẹp. Đây là dòng balo doanh nhân hàng hiệu, rất được dân văn phòng yêu thích và ưu chuộng.</p>
 
                        <p>Thông tin sản phẩm: </p>
                        <p>- Kích thước: 30x42x12 cm.</p>
                        <p>- Trọng lượng balo Gubag: 800 gram</p>
                        <p>- Chất liệu vải Oxford chống thấm tốt, sợi Polyester bền chắc, đường may tỉ mỉ, tinh tế.</p>
                        <p>- Có cổng USB đê kết nối sạc dự phòng có ngăn riêng ra ngoài.</p>
                        <p>- Có cổng tai nghe nối ra ngoài.</p>
                        <p>- Thiết kế nhiều ngăn: Laptop tối đã 15.6 inch, máy tính bảng, ô, sách vở, máy tính cầm tay, Quần áo và vật dụ Có ngăn để ví để điện thoại riêng biệt.</p>
                        <p>- Có 2 màu cơ bản: Đen - Xám.</p>

                        <div class="pt-2 button">
                            <button >Mua ngay</button>
                        <div>
                    </div>
                </div>
            </div>
        `
    },

    afterRender(){
       const btn = document.querySelector('#btn');
       console.log(btn);
    }
}

export default AboutPages;
import React from 'react';
import { Link } from 'react-router-dom';
import './Terms.scss';

export default function Terms() {
  return (
    <div className='terms-page'>
        <div className='terms-banner'>
            <div className='container'>
                <h1>Điều khoản dịch vụ</h1>
                <p>Ngày cập nhật:</p>
                <p>Ngày 08 tháng 04 năm 2022</p>
            </div>
        </div>    
        <div className='terms-content container'>
            <div className='terms-document'>
                <h3>A. Quy định chung</h3>
                <p>Chào mừng bạn đến với <strong>Vietbando!</strong></p>
                <p><strong>Website Vietbando </strong>là một trang thông tin điện tử thuộc bản quyền của <strong>Công ty Cổ phần Tin học Bản đồ Việt Nam,</strong>chuyên cung cấp các dịch vụ liên quan đến Bản đồ Việt Nam. Tất cả các dịch vụ này chúng tôi cung cấp cho hầu hết các đối tượng khách hàng, bao gồm các cá nhân, các tổ chức sử dụng, hoặc hợp tác kinh doanh với Vietbando.</p>
                <p>Khi sử dụng Website này hoặc bất kỳ sản phẩm/ dịch vụ nào tại đây có nghĩa là bạn đã chấp nhận và đồng ý tuân theo Bản Điều khoản của Vietbando. Ngoài ra khi sử dụng các Dịch vụ cụ thể của Vietbando, bạn phải tuân theo các điều khoản và điều kiện riêng áp dụng cho Dịch vụ đó theo từng thời điểm.</p>
                <p>Vietbando có thể thay đổi, điều chỉnh Điều khoản sử dụng này theo quyết định của mình mà không cần thông báo cho bạn. Bạn có thể xem những thông tin mới cập nhật vào bất cứ lúc nào tại <a href="https://maps.vietbando.com/" target="_blank">https://vietbando.com</a> vào bất cứ khi nào.</p>
                <p>Nếu bạn tiếp tục sử dụng Dịch vụ có nghĩa là bạn chấp nhận và đồng ý tuân theo Điều khoản sử dụng mới được cập nhật. Bất cứ sự vi phạm nào của bạn đối với các điều khoản và điều kiện này đều có thể dẫn đến việc đình chỉ hoặc kết thúc tài khoản, Dịch vụ hoặc những hoạt động được phép khác theo Thỏa thuận sử dụng Dịch vụ của Vietbando. Hơn thế nữa, Vietbando có quyền tìm kiếm các phương pháp giải quyết dựa trên các thoả thuận sẵn có và luật pháp hiện hành.</p>
                <h5>1. Sử dụng hợp pháp</h5>
                <p>Bạn không được tham gia vào bất cứ hoạt động nào liên quan đến việc phát tán, xuất bản hoặc chuyển các loại email không mong muốn (thư rác) trên Internet đến người dùng khác trong hệ thống như thông tin khuyến mãi, quảng cáo.</p>
                <h5>2. Sự tuân thủ</h5>
                <p>Vietbando cũng có thể hợp tác với với cơ quan pháp luật để hỗ trợ điều tra và truy tố các hoạt động vi phạm pháp theo quy định. Nếu Bạn muốn thông báo bất kỳ hành động vi phạm những điều khoản này, vui lòng liên hệ <a href="mailto:info@vietbando.vn">info@vietbando.vn</a></p>
                <h5>3. Liên kết website của bên thứ ba</h5>
                <p>Website này có thể kết nối đến những website của các bên thứ ba. Vietbando cung cấp những đường dẫn để thực hiện các kết nối này nhằm đem đến sự thuận tiện cho Bạn. Những website của nhà cung cấp hoặc quảng cáo này được sở hữu bởi những tổ chức có hoạt động độc lập. Vietbando không chịu trách nhiệm, xác nhận hay có nghĩa vụ đối với bất kỳ nội dung, quảng cáo, các sản phẩm có sẵn từ các website đó.</p>
                <p>Thêm nữa, Bạn xác nhận và đồng ý rằng Vietbando sẽ không chịu trách nhiệm hoặc có nghĩa vụ, trực tiếp hoặc gián tiếp, đối với bất kỳ thiệt hại hoặc tổn thất nào liên quan tới việc sử dụng hay căn cứ vào nội dung, sản phẩm hoặc dịch vụ hiện có trên bất kỳ website đó. Bạn nên tìm hiểu kỹ về các nhà cung cấp trước khi thực hiện bất kỳ giao dịch nào với bên thứ ba.</p>
                <h5>4. Quyền sử hữu trí tuệ</h5>
                <p>Tất cả hình ảnh, biểu tượng, và tất cả các nội dung khác (gọi tắt là Nội dung) tại Website này thuộc sở hữu của Vietbando và các tổ chức/công ty khác đã được Vietbando cho phép. Vietbando cho phép Bạn xem, tải về và in Nội dung khi:</p>
                <ul>
                    <li>Bạn chỉ sử dụng cho mục đích cá nhân chứ không phải cho mục đích thương mại.</li>
                    <li>Bạn không sao chép, xuất bản hoặc sử dụng lại Nội dung.</li>
                    <li>Bạn không chỉnh sửa Nội dung.</li>
                    <li>Bạn không di chuyển bất kỳ bản quyền, thương hiệu và các Nội dung độc quyền khác trên Website.</li>
                </ul>
                <p>Ngoại trừ việc cho phép rõ ràng như trên, nghiêm cấm mọi việc sao chép, điều chỉnh hoặc sử dụng lại Nội dung Website mà không có sự cho phép trước bằng văn bản của Vietbando. Để yêu cầu sử dụng Nội dung, Bạn có thể liên hệ <a href="mailto:info@vietbando.vn">info@vietbando.vn</a>. Nếu được chấp thuận, Bạn phải bảo đảm là việc sử dụng Nội dung Website của Bạn sẽ phù hợp với Quy định này và việc sử dụng này không vi phạm quyền, lợi ích của các cá nhân/tổ chức khác hoặc vi phạm hợp đồng, nghĩa vụ luật pháp của cá nhân/tổ chức khác.</p>
                <h5>5. Tuyên bố từ chối bảo đảm</h5>
                <p>Website này và các Dịch vụ được cung cấp trên cơ sở "có thể thực hiện được". Vietbando không bảo đảm rằng Website hoặc Dịch vụ sẽ luôn sẵn sàng, có thể sử dụng, không bị gián đoạn, đúng thời gian, chính xác, an toàn, không có lỗi hoặc virus cũng như chắc chắn về kết quả đạt được sau khi sử dụng Website, Dịch vụ.</p>
                <p>Bạn cần lưu ý rằng Website này và Dịch vụ là dựa trên những dịch vụ đường truyền Internet và có thể bị mất điện hoặc gián đoạn, bị bên ngoài tấn công và xảy ra chậm trễ. Trong những trường hợp như vậy, đối với những điều khoản này, Vietbando sẽ nỗ lực khắc phục sự gián đoạn và đưa ra sự điều chỉnh, sửa chữa và thay thế trong khả năng có thể để phục hồi hệ thống.</p>
                <h5>6. Giới hạn trách nhiệm</h5>
                <p>Vietbando sẽ không chịu bất kỳ trách nhiệm nào hoặc trách nhiệm liên đới đối với những hậu quả của việc truy cập trái phép đến máy chủ, giao diện của nhà cung cấp; Website; trang thiết bị và dữ liệu của Bạn hoặc dữ liệu khách hàng của Bạn vì tai nạn, phương tiện bất hợp pháp như hacking hay thiết bị của bên thứ ba và các nguyên nhân khác nằm ngoài sự kiểm soát của Vietbando. Vietbando cũng không chịu trách nhiệm nếu Dịch vụ hoặc Website bị xâm nhập bởi trojan, virus, các chương trình phần mềm khác cố ý phá hoại của bên ngoài.</p>
                <p>Như một điều kiện khi sử dụng Website này và Dịch vụ, Bạn đồng ý rằng Vietbando, giám đốc, nhân viên, các tổ chức thành viên, cổ đông, đại lý, nhà cung cấp của Vietbando sẽ không có trách nhiệm với Bạn hoặc bên thứ ba cho việc thiệt hại lợi nhuận, cơ hội kinh doanh; thiệt hại, chi phí phát sinh trực tiếp hay gián tiếp vì kết nối với Website này hay sử dụng các Dịch vụ của Vietbando.</p>
                <p>Vietbando không bảo đảm cũng như chịu trách nhiệm về kết quả của các giao dịch hoặc sử dụng Mạng. Mọi việc liên quan đến các giao dịch của Vietbando sẽ được giải quyết theo Thỏa thuận sử dụng Dịch vụ tương ứng giữa đơn vị phát hành Vietbando và Bạn.</p>
                <h5>7. Bồi thường</h5>
                <p>Bạn có nghĩa vụ bồi thường cho Vietbando hoặc bất cứ bên thứ ba nào cho toàn bộ/bất cứ thiệt hại thực tế nào mà phần lỗi được xác định là do Bạn khi xảy ra một trong các tình huống dưới đây:</p>
                <ul>
                    <li>Vi phạm các Điều khoản này hoặc các Thỏa thuận sử dụng Dịch vụ khác của Vietbando.</li>
                    <li>Vi phạm các quy định và pháp luật hiện hành gây ảnh hưởng/thiệt hại đến Vietbando.</li>
                    <li>Sự vô ý hoặc hành vi cố ý làm sai của Bạn, hoặc nhân viên và đại lý của Bạn gây ảnh hưởng/thiệt hại đến Vietbando.</li>
                    <li>Vi phạm bất cứ quy định/thoả thuận nào tại Chính sách bảo mật.</li>
                    <li>Xâm phạm quyền sở hữu trí tuệ hoặc quyền lợi hợp pháp của bất kỳ cá nhân/tổ chức nào gây ảnh hưởng/thiệt hại đến Vietbando.</li>
                    <li>Tranh chấp trong việc quảng cáo, khuyến mãi, phân phối hàng hóa của Bạn gây ảnh hưởng/thiệt hại đến Vietbando.</li>
                </ul>
                <h5>8. Truy cập vào khu vực có mật khẩu</h5>
                <p>Chỉ những người được Vietbando ủy quyền hợp pháp mới được thực hiện việc truy cập và sử dụng những khu vực được bảo vệ bằng mật khẩu của Website. Những cá nhân/tổ chức cố ý xâm nhập vào vùng này có thể sẽ bị khởi kiện và tuỳ từng mức độ, truy tố theo pháp luật hiện hành.</p>
                <h5>9. Điều khoản loại trừ</h5>
                <p>Vietbando sẽ không chịu trách nhiệm đối với bất kỳ thiệt hại nào phát sinh từ hoặc liên quan đến việc thực hiện nghĩa vụ chậm trễ hoặc gián đoạn vì những lý do chiến tranh, đình công, thiên tai, hỏa hoạn, gián đoạn thông tin liên lạc, điện nước, dịch vụ cung cấp đường truyền Internet, sự tác động của bên thứ ba hoặc các sự cố khác ngoài khả năng kiểm soát của Vietbando.</p>
                <h5>10. Điều khoản chung</h5>
                <p>Trường hợp có bất kỳ điều khoản nào của Điều khoản sử dụng này (một phần hay toàn bộ) hết hiệu lực hoặc không thể thi hành vì bất cứ lý do gì sẽ chỉ ảnh hưởng đến điều, khoản đã xác định hết hiệu lực đó và không ảnh hưởng đến hiệu lực của các điều khoản còn lại. Nếu có sự khác biệt giữa Điều khoản sử dụng này và các Thỏa thuận sử dụng Dịch vụ thì quy định nào mới nhất sẽ có giá trị.</p>
                <h3>B. Quy định sử dụng</h3>
                <h5>1. Thương hiệu</h5>
                <p>Thương hiệu <strong>Vietbando</strong> đã được đăng ký độc quyền nhãn hiệu của <strong>Công ty Cổ phần Tin học Bản đồ Việt Nam</strong>. Vietbando có quyền hợp pháp bổ sung, điều chỉnh danh mục các thương hiệu, nhãn hiệu này tùy từng thời điểm. Vì vậy, việc Bạn đăng ký dù là cố ý hay vô ý bất kỳ nhãn hiệu hoặc logo nào có thể gây hiểu lầm hoặc trùng lắp với những nhãn hiệu và logo trên đều là bất hợp pháp. Bạn phải tuân thủ tất cả tiêu chuẩn đề ra của thương hiệu Vietbando, logo Vietbando và phải sử dụng theo đúng quy định của Vietbando. Website <a href="https://maps.vietbando.com/" target="_blank">https://vietbando.com</a> là trang thông tin điện tử thuộc bản quyền của Công ty Cổ phần Tin học Bản đồ Việt Nam.</p>
                <h5>2. Những dịch vụ cung cấp trên Website</h5>
                <p>Khi Bạn đăng ký sử dụng một Dịch vụ trên Website thì có nghĩa là Bạn đã chấp nhận những Quy định và điều kiện tương ứng cho Dịch vụ đó theo Thỏa thuận sử dụng Dịch vụ liên quan. Ngoại trừ những quy định được xác định trong Thỏa thuận sử dụng Dịch vụ, Vietbando không bảo đảm những mô tả và Nội dung của Website này là chính xác, hiện hành, đáng tin cậy và không có lỗi tại mọi thời điểm.</p>
                <h5>3. Chấm dứt sử dụng</h5>
                <p>Vietbando có quyền chấm dứt việc truy cập của Bạn vào Website và việc sử dụng Dịch vụ bất kỳ khi nào tuỳ thuộc vào sự xem xét, quyết định duy nhất của Vietbando căn cứ trên nhu cầu, tình hình kinh doanh cụ thể của Vietbando. Sự chấm dứt này sẽ được thông báo trước cho Bạn bằng văn bản hoặc email. Vietbando sẽ không chịu bất cứ trách nhiệm nào với Bạn và bên thứ ba về hậu quả phát sinh từ hoặc liên quan tới việc chấm dứt này.</p>
            </div>
        </div>    
    </div>
  )
}
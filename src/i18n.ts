import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const currentLang = localStorage.getItem('lang') || 'en';

const translateEng = {
  albumLayout: 'Album layout',
  desc: 'Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don"t simply skip over it entirely.',
  btnMain: 'Button Main',
  btnSecondary: 'Button Secondary',
  headingText: 'Heading',
  cardDesc: 'This is a media card. You can use this section to describe the content.',
  btnView: 'View',
  btnEdit: 'Edit',
  footer: 'Footer',
  copyRight: 'Something here to give the footer a purpose! Copyright © Your Website 2022.',
  homeLink: 'Home',
  bookBestSeller: 'Book Best Seller',
};

const translateVie = {
  albumLayout: 'Bộ sưu tập',
  desc: 'Vài điều ngắn gọn và dẫn dắt về bộ sưu tập bên dưới — nội dung của bộ sưu tập, người tạo, v.v. Hãy làm cho nó ngắn gọn và hấp dẫn, nhưng không quá ngắn để mọi người không chỉ đơn giản là bỏ qua hoàn toàn.',
  btnMain: 'Nút Chính',
  btnSecondary: 'Nút Phụ',
  headingText: 'Phần mở đầu',
  cardDesc: 'Đây là một thẻ nhớ. Bạn có thể sử dụng phần này để mô tả nội dung.',
  btnView: 'Xem ngay',
  btnEdit: 'Chỉnh sửa',
  footer: 'Chân trang',
  copyRight:
    'Một cái gì đó ở đây để cung cấp cho footer một mục đích! Bản quyền © Trang web của bạn 2022.',
  homeLink: 'Trang Chủ',
  bookBestSeller: 'Sách bán chạy',
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: translateEng,
      },
      vi: {
        translation: translateVie,
      },
    },
    lng: currentLang?.toString(), // if you're using a language detector, do not define the lng option
    fallbackLng: 'vi',

    interpolation: {
      escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    },
  });

export default i18n;

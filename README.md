# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


# infinite-scroll
Infinite scroll in react js

Alur kerja dari kode tersebut adalah sebagai berikut:

1. Pada awalnya, komponen App akan merender beberapa `item` dengan menggunakan state `items` yang diinisialisasi dengan 20 item pada baris ke-6.
2. Komponen App akan merender komponen InfiniteScroll yang memiliki properti `dataLength`, `next`, `hasMore`, dan `loader`.
3. InfiniteScroll akan merender item-item yang ada pada `items` dengan menggunakan `.map()` pada baris ke-33. Pada awalnya, item yang dirender adalah 20 item yang sudah diinisialisasi pada langkah 1.
4. InfiniteScroll mengecek apakah properti `hasMore` bernilai `true`. Jika iya, maka InfiniteScroll akan menjalankan fungsi `next` pada saat scroll mencapai bawah. Fungsi next akan menambahkan 20 item baru pada `items` dan merender ulang komponen App dengan menggunakan `setItems()`.
5. Jika `items.length` sudah mencapai 100, maka nilai `hasMore` akan diset menjadi `false`. Saat InfiniteScroll mencapai data terakhir dan `hasMore` bernilai `false`, loader tidak akan ditampilkan.

Maka dari itu, ketika InfiniteScroll mencapai data terakhir dan `hasMore` bernilai `false`, loader tidak akan ditampilkan. Hal ini disebabkan karena pada kode yang diberikan, nilai `hasMore` digunakan untuk menentukan apakah InfiniteScroll harus terus memuat data atau tidak. Oleh karena itu, ketika nilai `hasMore` adalah `false`, InfiniteScroll tidak lagi memuat data dan loader tidak ditampilkan

More ditails: 
1. Pertama-tama, diinisialisasi state `items` dan ```hasMore``` menggunakan ```useState```. ```items``` digunakan untuk menyimpan daftar item yang akan ditampilkan di dalam `InfiniteScroll`, sedangkan `hasMore` digunakan untuk menentukan apakah masih ada item yang harus diambil atau tidak.

2. Selanjutnya, ```useEffect``` digunakan untuk memperbarui state `hasMore` ketika `items` berubah. Jika jumlah item dalam `items` sudah mencapai 100, `hasMore` di-set menjadi `false` agar `InfiniteScroll` tidak lagi mencoba untuk memuat lebih banyak item.

3. Fungsi ```fetchMoreData``` dipanggil ketika ```InfiniteScroll``` mencapai akhir halaman. Fungsi ini menggunakan `setTimeout` untuk menunda penambahan item baru selama 1,5 detik. Kemudian, `newItems` diisi dengan array baru yang berisi 20 item baru. Setiap item baru memiliki properti `id` dan `content`, yang digunakan untuk menampilkan konten di dalam `div` di dalam `InfiniteScroll`.

4. Setelah array ```newItems``` diisi dengan item baru, ```setItems``` digunakan untuk menambahkan item baru ke dalam `items`.

5. Dalam ```return```, ```InfiniteScroll``` digunakan untuk menampilkan daftar item. Properti `dataLength` di-set ke panjang `items` agar `InfiniteScroll` tahu berapa banyak item yang sudah ditampilkan. Properti `next` di-set ke `fetchMoreData` agar `InfiniteScroll` tahu apa yang harus dilakukan ketika mencapai akhir halaman. Properti `hasMore` di-set ke `hasMore` agar `InfiniteScroll` tahu apakah masih ada item yang harus diambil atau tidak. Properti `loader` di-set ke komponen `<h4>Loading...</h4>` agar tampil ketika sedang memuat item baru.

6. Di dalam ```InfiniteScroll```, `items` di-mapping ke dalam `div` menggunakan fungsi `.map()`. Setiap `div` memiliki style yang diatur dengan `style`, dan memiliki properti `key` yang di-set ke `i.id`. Konten `div` diisi dengan `i.content`.

7. Setelah proses di atas selesai, tampilan aplikasi akan menampilkan daftar item yang terus bertambah ketika halaman di-scroll hingga mencapai batas maksimum 100 item

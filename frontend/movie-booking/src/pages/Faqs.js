import React from "react";
import Accordion from "react-bootstrap/Accordion";

const Faqs = () => {
  return (
    <div className="container mt-5">
      <h1 className="d-flex justify-content-center">
        <strong className="mt-5">Frequently Asked Questions</strong>
      </h1>
      <Accordion defaultActiveKey={0} className="mt-5 p-3">
        <Accordion.Item eventKey="0" className="item">
          <Accordion.Header>Bagaimana Cara Membeli Tiket?</Accordion.Header>
          <Accordion.Body>
            <ol>
              <li>Masuk ke akun TICKETBioskop Anda</li>
              <li>
                Anda dapat melihat film yang tayang saat ini di bagian Sedang
                Tayang
              </li>
              <li>
                Pilih jadwal tayang dan bioskop sesuai dengan yang Anda inginkan
              </li>
              <li>ketuk Buy Tiket</li>
              <li>
                Pilih bangku yang tersedia. Bangku yang masih tersedia ditandai
                dengan warna hijau
              </li>
              <li>
                Tap Ringkasan Order, lalu Anda akan melihat Ringkasan Order
                lengkap dengan total harga yang harus dibayarkan. Pastikan Anda
                memeriksa terlebih dahulu,
                <strong style={{ color:'red'}}>
                  karena setiap pembayaran yang berhasil bersifat final dan
                  tidak dapat ditukar atau dikembalikan
                </strong>
              </li>
              <li>
                Ketuk lanjutkan, lalu pilih metode pembayaran yang Anda
                inginkan. Pastikan Anda sudah mengaktifkan akun DANA Anda,
                karena setiap pembayaran tiket di TicketBioskop hanya dapat
                dilakukan dengan DANA.
              </li>
              <li>
                Anda akan menerima notifikasi status pembelian tiket Anda
                setelah pembayaran berhasil.
              </li>
            </ol>
            Untuk informasi lebih lanjut, silahkan hubungi Customer Support
            <strong style={{ color:'red'}}>TicketBioskop.</strong>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1" className="item">
          <Accordion.Header>
            Dapatkah saya menentukan sendiri kursi pilihan saya?
          </Accordion.Header>
          <Accordion.Body>
            Anda dapat menentukan sendiri kursi favorit Anda pada saat melakukan
            pemesanan tiket melalui TicketBioskop selama kursi pilihan Anda
            masih tersedia. Jika kursi yang Anda inginkan telah habis atau telah
            dipesan oleh orang lain, maka kami sarankan untuk memilih kursi lain
            yang masih tersedia.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2" className="item">
          <Accordion.Header>Bagaimana cara membayar tiket?</Accordion.Header>
          <Accordion.Body>
            Anda dapat melakukan pembayaran tiket pada halaman “Ringkasan Order”
            setelah selesai memilih kursi. Ikuti langkah mudah berikut untuk
            melakukan pembayaran:
            <ol>
              <li>
                Periksa kembali detail pesanan yang ada pada halaman “Ringkasan
                Order”
              </li>
              <li>Ketuk “Bayar Sekarang” untuk melakukan pembayaran.</li>
              <li>Anda akan diarahkan ke halaman pembayaran</li>
              <li>Ikuti petunjuk yang diberikan pada halaman pembayaran.</li>
              <li>
                Setelah pembayaran selesai, Anda akan mendapatkan konfirmasi
                atas transaksi Anda pada halaman “Tiket”
              </li>
              Untuk informasi lebih lanjut, silahkan hubungi Customer Support
              <strong style={{ color:'red'}}>TicketBioskop.</strong>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3" className="item">
          <Accordion.Header>
            Bagaimana cara membatalkan pemesanan saya yang telah selesai?
          </Accordion.Header>
          <Accordion.Body>
            Setelah pembelian tiket Anda dinyatakan berhasil, maka Anda tidak
            dapat membatalkan atau meminta kembali dana yang telah dibayarkan,
            dikarenakan <strong style={{ color:'red'}}>semua penjualan bersifat final.</strong> Agar
            terhindar dari masalah ini, kami menyarankan agar Anda memastikan
            kembali detail pembelian sebelum melakukan pembayaran.
            <p>
              Untuk informasi lebih lanjut, silahkan hubungi Customer Support
              <strong style={{ color:'red'}}>TicketBioskop.</strong>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4" className="item">
          <Accordion.Header>
            Apa saja metode pembayaran yang dapat digunakan?
          </Accordion.Header>
          <Accordion.Body>
            saat ini Anda dapat melakukan pembayaran menggunakan{" "}
            <strong style={{ color:'red'}}>Saldo DANA.</strong>
            Untuk dapat melakukan pembayaran,{" "}
            <strong style={{ color:'red'}}>Anda harus mengaktifkan akun DANA terlebih dahulu.</strong>
            <p>
              Untuk informasi lebih lanjut, silahkan hubungi Customer Support
              <strong style={{ color:'red'}}>TicketBioskop.</strong>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5" className="item">
          <Accordion.Header>
            Bagaimana cara login ke akun TicketBioskop saya?
          </Accordion.Header>
          <Accordion.Body>
            Untuk login ke akun TicketBioskop Anda, silahkan ikuti langkah
            dibawah ini:
            <ol>
              <li>Ketuk logo profil pada pojok kanan atas</li>
              <li>
                Pastikan Anda telah memiliki akun TicketBioskop sebelumnya.
              </li>
              <li>
                Masuk ke aplikasi TicketBioskop Anda. Pada bagian kanan paling
                atas ada pilihan menu ”Login/Register”. Silahkan ketuk menu
                tersebut.
              </li>
              <li>
                Masukan alamat Email dan password yang sudah terdaftar pada
                TicketBioskop, lalu ketuk “Sign In!”.
              </li>
              <li>
                Maka Anda sudah berhasil login atau masuk kembali ke akun
                TicketBioskop Anda.
              </li>
              <li>
                Jika Anda belum memiliki akun disarankan melakukan Register
                terlebih dahulu.
              </li>
              Untuk informasi lebih lanjut, silahkan hubungi Customer Support
              <strong style={{ color:'red'}}>TicketBioskop.</strong>
            </ol>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6" className="item">
          <Accordion.Header>
            Apakah saya bisa memesan tiket tanpa membuat akun TicketBioskop?
          </Accordion.Header>
          <Accordion.Body>
            Untuk melakukan pemesanan tiket, Anda{" "}
            <strong>diwajibkan untuk memiliki akun TicketBioskop</strong>{" "}
            terlebih dahulu. Dengan membuat akun, Anda akan mendapatkan berbagai
            kemudahan seperti pengalaman memesan tiket yang lebih cepat, melihat
            sejarah pemesanan tiket dan berbagai penawaran menarik lainnya dari
            TicketBioskop.
            <p>
              Untuk informasi lebih lanjut, silahkan hubungi Customer Support
              <strong style={{ color:'red'}}>TicketBioskop.</strong>
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="7" className="item">
          <Accordion.Header>
            Apakah saya bisa merubah jadwal tayang setelah melakukan pemesanan?
          </Accordion.Header>
          <Accordion.Body>
            Saat ini, perubahan jadwal tayang tidak dapat dilakukan setelah
            pemesanan tiket berhasil dilakukan. Oleh karena itu, pastikan Anda
            telah memilih jadwal tayang yang sesuai sebelum melakukan
            pemesanan. Semua transaksi yang telah berhasil bersifat final dan
            tidak dapat diubah.
            <p>
              Untuk informasi lebih lanjut, silahkan hubungi Customer Support
              <strong style={{ color:'red'}}>TicketBioskop.</strong>
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Faqs;

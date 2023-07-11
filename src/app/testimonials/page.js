import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TestimonialCard from "../components/TestimonialCard";
import TestimonialSlider from "../components/TestimonialSlider";

const dataTestimonials = [
    {
        name: "Mr. X",
        message: "Good place. Recommended lundry for shoes and bag."
    },
    {
        name: "Mr. X",
        message: "Dikasih job sama bos suruh cuci sepatu karyawan proyek! Lempar kesini aja pasti beres, hahay.."
    },
    {
        name: "Mr. X",
        message: "Sepatu putih abis kena lumpur jadi bersih lagi kayak baru 👍👍"
    },
    {
        name: "Mr. X",
        message: "Sepatu bisa di warna lagi jadi keren seperti baru 😍"
    },
    {
        name: "Mr. X",
        message: "Bersih, wangi, pelayanan ramah, ada layanan antar-jemput. TOP!"
    },
    {
        name: "Mr. X",
        message: "Rekomen sekali.. Sepatu saya jadi lebih bersih dan wangi ketimbang nyuci sendiri, wkwkwk.."
    },
    {
        name: "Mr. X",
        message: "Thank you sepatunya sudah balik bersih lg.. Lain kali mau coba repaint yaa.. 😊😊"
    },
    {
        name: "Mr. X",
        message: "Untuk pengerjaan sih okeh banget ya,utk waktu saya kira pas dengan hasil yg sangat bersih seperti baru lagi."
    },
    {
        name: "Mr. X",
        message: "Proses pengerjaannya cepat. Pelayanannya juga baik dan ramah. Untuk hasil deep cleaning dan whitening shoes nya memuaskan. Love it!"
    },
    {
        name: "Mr. X",
        message: "😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊😊"
    },
    {
        name: "Mr. X",
        message: "keren seperti baru 😍😍😍😍😍😍😍😍😍😍"
    },
    {
        name: "Mr. X",
        message: "Tempat langganan saya tiap mau nyuci sepatu kalo lagi males, hehe.. Suka"
    },
]

export default function Testimonials(){
    return (
        <>
            <Navbar />
            <main>
                <TestimonialSlider />
                <section className="columns-1 md:columns-2 lg:columns-4 px-6 md:px-12 lg:px-24 py-12 gap-8 h-full">
                    {dataTestimonials.map((testi, i) => {
                        return (
                            <TestimonialCard key={i} testi={testi} />
                        )
                    })}
                </section>
            </main>
            <Footer />
        </>
    )
}
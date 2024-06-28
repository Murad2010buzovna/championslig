import './SectionLatesNews.scss'
export default function SectionLatesNews() {
    return (
        <section className="container">
            <h1 className=" text-5xl">Lates News</h1>
            <div className="news1">
                <div >
                    <img className='rounded-md' src="https://e0.365dm.com/24/05/2048x1152/skysports-sancho-jadon-dortmund_6540075.jpg?20240501215509" alt="" />
                </div>
                <div>
                    <img className='rounded-md' src="https://editorial.uefa.com/resources/028d-1accdb9bd2a0-2851e242b880-1000/format/wide1/fc_bayern_munchen_v_real_madrid_semi-final_first_leg_-_uefa_champions_league_2023_24.jpeg" alt="" />
                    <p className='text-2xl'>The season in numbers</p>
                </div>
                <div>
                    <iframe className='rounded-md' src="https://www.youtube.com/embed/HmWSP8kOSpc?si=NUkMFoDOAPMMNoxU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                    <img src="" alt="" />
                 <p className='text-xl'>
                 Wach Now
                    </p>
                </div>
            </div>
            <div className="news2  flex items-center ">
                <div>
                    <img className='rounded-md' src="https://editorial.uefa.com//resources/028d-1ae099f7f35e-0eb0471e2257-1000/format/wide1/16x9_ucl_gots_2024_2.jpeg?imwidth=369" alt="" />
                    <p className='text-2xl'>Best games of the season?</p>
                </div>
                <div>
                    <img className='rounded-md' src="https://editorial.uefa.com//resources/028e-1b0b8f0dfe0d-c9a22aab691d-1000/format/wide1/ucl_-_fedex_-_itz_-_frame_x1_-_twitter.jpeg?imwidth=369" alt="" />
                    <p className='text-xl'>How Madrid edged 
                       Dortmund</p>
                </div>
                <div >
                    <img className='rounded-md' src="https://editorial.uefa.com//resources/028d-1ad5c1392bdc-20445d10bef0-1000/format/wide1/fbl-eur-c1-psg-dortmund.jpeg?imwidth=656" alt="" />
                </div>
            </div>
        </section>
    )
}
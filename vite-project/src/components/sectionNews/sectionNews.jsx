import "./sectionNews.scss"
export default function SectionNews() {
    return (
        <section className="bg-blue-900">
            <div className="container p-12 ">
                <div className="colums-2 md:columns-2 ">
                    <div className="mainNews">
                        <img className="image1" src="src\assets\sectionNews\borussia_dortmund_v_real_madrid_cf_-_uefa_champions_league_final_2023_24.avif" alt="" />
                        <p className="text text-white">

                            Highlights, report: Madrid win Champions League!
                        </p>
                    </div>
                    <div className="">
                        <div className=" blueGradiend m-4 p-4 rounded-lg ">
                            <h2 className="text-white text-3xl mb-2">Headlines
                            </h2>
                            <div className="flex m-1">
                                <div className="">
                                    <img src="https://editorial.uefa.com/resources/028e-1b138f3cdd3b-71983867bde7-1000/format/wide1/technical_report_20240607184301.jpeg?imwidth=158" alt="" />
                                </div>
                                <div className="pl-3 flex justify-center items-center ">
                                    <p className="text-white text-2xl">Player of the Season:
                                        <br /> Vinícius Júnior</p>
                                </div>
                            </div>
                            <div className="flex m-1">
                                <div className="">
                                    <img src="https://editorial.uefa.com/resources/028e-1b138f3cdd3b-71983867bde7-1000/format/wide1/technical_report_20240607184301.jpeg?imwidth=158" alt="" />
                                </div>
                                <div className="pl-3 flex justify-center items-center ">
                                    <p className="text-white text-2xl">Player of the Season:
                                        <br /> Vinícius Júnior</p>
                                </div>
                            </div>
                            <div className="flex m-1">
                                <div className="">
                                    <img src="https://editorial.uefa.com/resources/028e-1b138f3cdd3b-71983867bde7-1000/format/wide1/technical_report_20240607184301.jpeg?imwidth=158" alt="" />
                                </div>
                                <div className="pl-3 flex justify-center items-center ">
                                    <p className="text-white text-2xl">Player of the Season:
                                        <br /> Vinícius Júnior</p>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </section>
    )
}
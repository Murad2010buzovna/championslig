import Editorspick from "../components/editorspick/editorspick";
import Img from "../components/img/Img";
import SectionLatesNews from "../components/sectionLatesNews/SectionLatesNews";
import SectionNews from "../components/sectionNews/sectionNews";

export default function Homepage() {
    return (
        <div>
            <SectionNews />
            <SectionLatesNews />
            <Editorspick/>
            <Img/>
        </div>
    )
}
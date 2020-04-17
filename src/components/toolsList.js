import { ParagraphComponent as Paragraph} from './tools/paragraphComponents/paragraphComponent';
import { TitleComponent as Title } from './tools/titleComponents/titleComponent';
import { ImageComponent as Image } from './tools/imageComponents/imageComponent';
import { FetchData } from './tools/formComponents/fetchData';
import { UserFetchData } from './tools/formComponents/userFetchData';

const ToolsList = {
    'paragraph': Paragraph,
    'title': Title,
    'image': Image,
    'fetchData': FetchData,
    'userFetchData': UserFetchData
};

export default ToolsList
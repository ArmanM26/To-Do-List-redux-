import { Flex, Typography } from "antd";

const { Title } = Typography;

const Todo = ({name}) => {
    return(
        <Flex>
<Title>{name} </Title>
        </Flex>
    )
}
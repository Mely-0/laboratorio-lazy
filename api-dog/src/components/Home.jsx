import './css/home.css';
import { Card, CardHeader, CardBody, CardFooter, Text, SimpleGrid, Heading, Button } from '@chakra-ui/react'
const Home = () => {
    return (
    <div className='contenedor-home'>

    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(300px, 1fr))'>
    <Card>
        <CardHeader>
        <Heading size='md'> Melany Martinez</Heading>
        </CardHeader>
        <CardBody>
        <Text>programador@ en etapa training , 17 años .</Text>
        </CardBody>
        <CardFooter>
        <Button>View here</Button>
        </CardFooter>
    </Card>
    <Card>
        <CardHeader>
        <Heading size='md'> Franco Muñoz</Heading>
        </CardHeader>
        <CardBody>
        <Text>programador@ en etapa training , 18 años .</Text>
        </CardBody>
        <CardFooter>
        <Button>View here</Button>
        </CardFooter>
    </Card>
    <Card>
        <CardHeader>
        <Heading size='md'>Guillemo Morris</Heading>
        </CardHeader>
        <CardBody>
        <Text>programador@ en etapa training , 24 años .</Text>
        </CardBody>
        <CardFooter>
        <Button>View here</Button>
        </CardFooter>
    </Card>
</SimpleGrid>
    </div>
    );
};
export default Home;
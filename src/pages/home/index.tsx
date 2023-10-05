import { Post } from './components/Post';
import { Heading } from './components/heading';
import Section from './components/section';

export function Home() {
    return (
        <>
            <Section isFancy={false} >
                <Heading>Recent Posts</Heading>
                <Post title="Flavors of Lisbon" body="...those pastéis de nata!" />
                <Post title="Buenos Aires in the rhythm of tango" body="I loved it!" />
            </Section>
        </>
    );
}

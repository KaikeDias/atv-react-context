import { Heading } from "../heading"
import Section from "../section"

interface PostProps {
    title: string
    body: string
}

export function Post({title, body}: PostProps) {
    return (
        <Section isFancy={true}>
            <Heading>
                {title}
            </Heading>
            <p><i>{body}</i></p>
        </Section>
    )
}

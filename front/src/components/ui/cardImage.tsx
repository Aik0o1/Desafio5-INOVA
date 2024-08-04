import * as React from "react"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

interface CardImageProps {
    title: string;
    description: string;
    content: string;
    // footer: string;
}

export function CardImage(props: CardImageProps) {
    return (
        <Card className='w-80 h-full flex flex-col mt-5 ml-2 mr-2 items-center'>
            <CardHeader>
                <CardTitle>{props.title}</CardTitle>
            </CardHeader>
            <CardContent className=''>
                <img className="w-54 h-72 rounded" src={props.content} />
            </CardContent>
            <CardDescription className='ml-2'>{props.description}</CardDescription>
        </Card>)

}
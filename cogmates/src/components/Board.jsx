import { Card } from "./Card"

export function Board(){

    

    return (
        <div className="grid grid-cols-[repeat(auto-fill,_minmax(200px,_1fr))] max-w-screen-xl gap-4">
            {Array.from({length: 16}).map((_, index) => (
                <Card key={index} />
            ))}
        </div>
    )
}
import Image from "next/image";
import "./Gallery.css";
import { FadeIn, SlideUp } from "@/animations/animations";

export default function Gallery() {
    const images1 = ["/anime_girl_cat.png", "/girl_beach.png", "/girl_cyberpunk.png", "/man_business.png"];
    const images2 = ["/bride.png", "/girl_snow.png", "/john_snow.png", "/cat_painting.png"];
    return (
        <div className="my-20">
            <div className="max-w-screen-2xl mx-auto px-4 md:px-12 mb-4 md:mb-12">
                <FadeInSection delay={.25}>
                    <h1 className="text-2xl md:text-4xl">Join Through Art of community</h1>
                </FadeInSection>
            </div>
            <div className="outer_scroll">
                <SlideUpSection delay={.5}>
                    <div className="inner_scroll primary flex">
                        <Images images={images1} />
                        <div className="ml-[20px]">
                            <Images images={images2} />
                        </div>
                        <div className="ml-[20px]">
                            <Images images={images1} />
                        </div>
                        <div className="ml-[20px]">
                            <Images images={images2} />
                        </div>
                    </div>
                </SlideUpSection>
            </div>
        </div >
    );
};

const ImageCard = ({ src, alt, variant }: { src: string, alt: string, variant: number }) => {
    const variant1 = (
        <div className="w-[600px] h-[420px]">
            <Image className="object-cover w-full h-full" src={src} alt={alt} width={600} height={420} />
        </div>
    )

    const variant2 = (
        <div className="w-[300px] h-[200px]">
            <Image className="object-cover w-full h-full" src={src} alt={alt} width={600} height={420} />
        </div>
    )

    const variant3 = (
        <div className="w-[300px] h-[420px]">
            <Image className="object-cover w-full h-full" src={src} alt={alt} width={600} height={420} />
        </div>
    )

    return variant === 1 ? variant1 : variant === 2 ? variant2 : variant === 3 ? variant3 : null;
}

const Images = ({ images }: { images: string[] }) => {
    return (
        <div className="flex">
            <ImageCard
                src={images[0]}
                alt="Image1"
                variant={1}
            />
            <div className="ml-[20px]">
                <div className="mb-[20px]">
                    <ImageCard
                        src={images[1]}
                        alt="Image2"
                        variant={2}
                    />
                </div>
                <div className="w-[300px] h-[200px] bg-[#19161C] p-8 flex">
                    <div className="mx-auto my-auto text-center">
                        <h1 className="text-4xl text-[#D2FF3A] mb-4">48,000</h1>
                        <p className="font-extralight text-sm">IMAGES GENERATED BY</p>
                        <p className="font-extralight text-sm">ARTIFICIAL INTELLIGENCE</p>
                    </div>
                </div>
            </div>
            <div className="ml-[20px]">
                <ImageCard
                    src={images[2]}
                    alt="Image3"
                    variant={3}
                />
            </div>
            <div className="ml-[20px]">
                <div className="w-[300px] h-[200px] bg-[#19161C] p-8 flex">
                    <div className="mx-auto my-auto text-center">
                        <h1 className="text-4xl text-[#D2FF3A] mb-4">48,000</h1>
                        <p className="font-extralight text-sm">IMAGES GENERATED BY</p>
                        <p className="font-extralight text-sm">ARTIFICIAL INTELLIGENCE</p>
                    </div>
                </div>
                <div className="mt-[20px]">
                    <ImageCard
                        src={images[3]}
                        alt="Image4"
                        variant={2}
                    />
                </div>
            </div>
        </div>
    );
}

const FadeInSection = ({ children, delay }: { children: JSX.Element, delay: number }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <FadeIn delay={delay}>
                    {children}
                </FadeIn>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
};

const SlideUpSection = ({ children, delay }: { children: JSX.Element, delay:number }) => {
    return (
        <div>
            <div className="hidden md:flex">
                <SlideUp delay={delay}>
                    {children}
                </SlideUp>
            </div>
            <div className="md:hidden">
                {children}
            </div>
        </div>
    )
}
import Image from "next/image"
import { StyledHeader } from "./style"

const Header = () => {
    return (
        <>
            <StyledHeader>
                <div style={{borderRight: '1px solid white'}}>
                    <Image 
                        src='/images/graph-icon-header.svg'
                        width={50}
                        height={50}
                        alt="logo"
                    />
                </div>
            </StyledHeader>
        </>
    )

}

export default Header
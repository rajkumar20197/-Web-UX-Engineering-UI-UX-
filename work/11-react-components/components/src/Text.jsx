import './Text.css';
import Button from './Button';
import { useState } from 'react';


function Text() {
    const [clickedButton, setClickedButton] = useState(null);

    const handleLinkClick = () => {
        setClickedButton('Link');
      };

      const handleButtonClick = () => {
        setClickedButton('Button');
      };

    return(
        <div className="content">
            <div className="content__box">
            <p>
            cat, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea quae explicabo soluta. Non iusto quis nostrum ratione! Officiis vero obcaecati incidunt amet magni iusto expedita alias reprehenderit non earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam, odio fugit fugiat sequi laboriosam ipsam tempora quae at, dolorum autem ipsum. cat, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea quae explicabo soluta. Non iusto quis nostrum ratione! Officiis vero obcaecati incidunt amet magni iusto expedita alias reprehenderit non earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam, odio fugit fugiat sequi laboriosam ipsam tempora quae at, dolorum autem ipsum. Harum  ;
            </p>
            <p>Click on this<Button type="button" visual="link" onClick={handleLinkClick}>link</Button>for more info.</p>
            </div>
            <div className="content__box">
            <p>
            cat, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea quae explicabo soluta. Non iusto quis nostrum ratione! Officiis vero obcaecati incidunt amet magni iusto expedita alias reprehenderit non earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam, odio fugit fugiat sequi laboriosam ipsam tempora quae at, dolorum autem ipsum. cat, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea quae explicabo soluta. Non iusto quis nostrum ratione! Officiis vero obcaecati incidunt amet magni iusto expedita alias reprehenderit non earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam, odio fugit fugiat sequi laboriosam ipsam tempora quae at, dolorum autem ipsum. cat, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea quae explicabo soluta. Non iusto quis nostrum ratione! Officiis vero obcaecati incidunt amet magni iusto expedita alias reprehenderit non earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam, odio fugit fugiat sequi laboriosam ipsam tempora quae at, dolorum autem ipsum. cat, Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et ea quae explicabo soluta. Non iusto quis nostrum ratione! Officiis vero obcaecati incidunt amet magni iusto expedita alias reprehenderit non earum! Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quibusdam, odio fugit fugiat sequi laboriosam ipsam tempora quae at, dolorum autem ipsum. Harum   ;
            </p>
            <p><Button type="button" visual="button" onClick={handleButtonClick}>Subscribe</Button> for more info.</p>
            </div>

            <p className="button__desc">Clicked Button: {clickedButton}</p>
           
        </div>
    );
}

export default Text;
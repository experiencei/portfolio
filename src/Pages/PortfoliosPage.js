import React, { useState } from 'react';
import {MainLayout, InnerLayout} from '../styles/Layouts';
import Title from '../Components/Title';
import portfolios from '../data/portfolios';
import Menu from '../Components/Menu';
import Button from '../Components/Button';


const Ans = Object.values(portfolios);

const data = Ans.map(( cal , index ) => {
  const we = Object.values(cal)
  return  we
})

const data3 = data.flat(Infinity)

const allButtons = ['All', ...new Set(data3.map(item => item.category))]

function PortfoliosPage() {
    const [menuItem, setMenuItems] = useState(data3);
    // const [button, setButtons] = useState(allButtons);

    const filter = (button) => {

        if(button === 'All'){
            setMenuItems(data3);
            return;
        }
    else{
        const filteredData = data3.filter(item => item.category === button);
        setMenuItems(filteredData);
      }
    }
    return (
        <MainLayout>
            <Title title={'Portfolios'} span={'portfolios'} />
            <InnerLayout>

                <Button filter={filter} button={allButtons} />
                <Menu menuItem={menuItem} />
            </InnerLayout>
        </MainLayout>
    )
}

export default PortfoliosPage

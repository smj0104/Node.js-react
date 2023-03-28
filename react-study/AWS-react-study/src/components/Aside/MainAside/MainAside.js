/** @jsxImportSource @emotion/react */
import React from 'react';
import { Navigation } from "react-minimal-side-navigation/lib";
import 'react-minimal-side-navigation/lib/ReactMinimalSideNavigation.css';
import { HiHome } from 'react-icons/hi';
import { GrTest } from 'react-icons/gr';
import { BsCardChecklist } from 'react-icons/bs';
import { BiListCheck } from 'react-icons/bi';
import { FaUsers } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import * as S from './style';

const MainAside = () => {
    const navigate = useNavigate();

    return (
        <aside css={S.style}>
            <Navigation
            activeItemId='/'
            onSelect={({itemId}) => {
                navigate(itemId);
            }}
            items={[
                {
                    title: 'T1',
                    itemId: '/t1',
                    elemBefore: () => <HiHome />,
                },
                {
                    title: 'T2',
                    itemId: '/t2',
                    elemBefore: () => <GrTest />,
                },
                {
                    title: 'Sample',
                    itemId: '/sample/input/1',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: 'input1',
                            itemId: '/sample/input/1',
                            elemBefore: () => <BiListCheck />
                        }
                    ]
                },
                {
                    title: 'List',
                    itemId: '/users',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: '사용자 전체 조회',
                            itemId: '/users',
                            elemBefore: () => <FaUsers />
                        }
                    ]
                },
                {
                    title: 'TodoList',
                    itemId: '/todo',
                    elemBefore: () => <BsCardChecklist />,
                    subNav: [
                        {
                            title: 'todo',
                            itemId: '/todo',
                            elemBefore: () => <FaUsers />
                        }
                    ]
                },
                {
                    title: 'NumberCounter',
                    itemId: '/number/counter',
                    elemBefore: () => <BsCardChecklist />,
                }
            ]}
            />
        </aside>
    );
    
}
export default MainAside;
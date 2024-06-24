import * as React from "react"
import { useTranslation } from 'react-i18next';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import favicon from '@/assets/common//favicon.png'

import dashboardIcon from '@/assets/common/light/dashboard.png'
import stakeIcon from '@/assets/common/light/stake.png'
import bondIcon from '@/assets/common/light/bond.png'
import claimIcon from '@/assets/common/light/claim.png'
import winRewardIcon from '@/assets/common/light/winReward.png'
import daoRewardIcon from '@/assets/common/light/daoReward.png'
import idoRewardIcon from '@/assets/common/light/idoReward.png'
import boardroomIcon from '@/assets/common/light/boardroom.png'

import darkDashboardIcon from '@/assets/common/dark/dashboard.png'
import darkStakeIcon from '@/assets/common/dark/stake.png'
import darkBondIcon from '@/assets/common/dark/bond.png'
import darkClaimIcon from '@/assets/common/dark/claim.png'
import darkWinRewardIcon from '@/assets/common/dark/winReward.png'
import darkDaoRewardIcon from '@/assets/common/dark/daoReward.png'
import darkIdoRewardIcon from '@/assets/common/dark/idoReward.png'
import darkBoardroomIcon from '@/assets/common/dark/boardroom.png'
import { useTheme } from "@/providers/theme";
import { useNavigate } from "react-router-dom";

export function MenuDrawer() {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const navigate = useNavigate();
  const handleClickLink = (link: string) => {
    navigate(link);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Menu className='h-4 w-4' />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 ml-2">
        <DropdownMenuLabel onClick={() => handleClickLink('/')}>
          <div className="w-full flex flex-col items-center justify-center">
            <img className="h-16 w-16 m-2" src={favicon} alt="" />
            <div className="m-1">PHOENIX</div>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem onClick={() => handleClickLink('/')}>
            <div className="flex items-center mb-1">
              <img className="h-5 w-5 mr-2" src={theme === 'light' ? dashboardIcon : darkDashboardIcon} alt="" />
              <span>{t('Dashboard')}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickLink('/Stake')}>
            <div className="flex items-center mb-1">
              <img className="h-5 w-5 mr-2" src={theme === 'light' ? stakeIcon : darkStakeIcon} alt="" />
              <span>{t('Stake')}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickLink('/Bond')}>
            <div className="flex items-center mb-1">
              <img className="h-5 w-5 mr-2" src={theme === 'light' ? bondIcon : darkBondIcon} alt="" />
              <span>{t('Bond')}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickLink('/ClaimProfit')}>
            <div className="flex items-center mb-1">
              <img className="h-5 w-5 mr-2" src={theme === 'light' ? claimIcon : darkClaimIcon} alt="" />
              <span>{t('ClaimProfit')}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickLink('/Stake')}>
            <div className="flex items-center mb-1">
              <img className="h-5 w-5 mr-2" src={theme === 'light' ? winRewardIcon : darkWinRewardIcon} alt="" />
              <span>{t('WINReward')}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickLink('/DaoReward')}>
            <div className="flex items-center mb-1">
              <img className="h-5 w-5 mr-2" src={theme === 'light' ? daoRewardIcon : darkDaoRewardIcon} alt="" />
              <span>{t('DAOReward')}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickLink('/IdoReward')}>
            <div className="flex items-center mb-1">
              <img className="h-5 w-5 mr-2" src={theme === 'light' ? idoRewardIcon : darkIdoRewardIcon} alt="" />
              <span>{t('IDORelease')}</span>
            </div>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => handleClickLink('/Boadroom')}>
            <div className="flex items-center mb-1">
              <img className="h-5 w-5 mr-2" src={theme === 'light' ?  boardroomIcon: darkBoardroomIcon} alt="" />
              <span>{t('Boardroom')}</span>
            </div>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

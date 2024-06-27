import * as React from 'react';
// import { MinusIcon, PlusIcon } from "@radix-ui/react-icons"
// import { Bar, BarChart, ResponsiveContainer } from "recharts"
import { useTranslation } from 'react-i18next';
import { Skeleton } from '@/components/ui/skeleton';

import { LoadingButton } from '@/components/ui/loadingButton';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';
import { useState } from 'react';
export default function BondDrawaer() {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  return (
    // onOpenChange={setOpen}
    <Drawer open={open} >
      <DrawerTrigger asChild>
        <LoadingButton loading={btnLoading} size='my' variant="my" onClick={() => {
          setTimeout(() => {
            setBtnLoading(true);
            setOpen(true);
            // setOpen(false)
            setBtnLoading(false);
          }, 3000);
        }}>{t('stake.Approve')}</LoadingButton>
      </DrawerTrigger>
      <DrawerContent className="dark:border-none">
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>THS-USDT LP</DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>
          {/* <div className="p-4 pb-0">
            <div className="flex items-center justify-center space-x-2">
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(-10)}
                disabled={goal <= 200}
              >
                <span className="sr-only">Decrease</span>
              </Button>
              <div className="flex-1 text-center">
                <div className="text-7xl font-bold tracking-tighter">
                  {goal}
                </div>
                <div className="text-[0.70rem] uppercase text-muted-foreground">
                  Calories/day
                </div>
              </div>
              <Button
                variant="outline"
                size="icon"
                className="h-8 w-8 shrink-0 rounded-full"
                onClick={() => onClick(10)}
                disabled={goal >= 400}
              >
                <span className="sr-only">Increase</span>
              </Button>
            </div>
            <div className="mt-3 h-[120px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                  <Bar
                    dataKey="goal"
                    style={
                      {
                        fill: "hsl(var(--foreground))",
                        opacity: 0.9,
                      } as React.CSSProperties
                    }
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div> */}
          <Skeleton></Skeleton>

          <div>
            <div>
              <div>Bond Price</div>
              <div>Market Price</div>
            </div>
          </div>

          <DrawerFooter className="mb-5">
            <div className="flex items-center justify-center">
              <LoadingButton loading={btnLoading} size='my' variant="my" onClick={() => {
                setBtnLoading(true);
                setTimeout(() => {
                  setBtnLoading(false);
                  // setOpen(false)
                }, 3000);
              }}>{t('stake.Approve')}</LoadingButton>
              {/* <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose> */}
            </div>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

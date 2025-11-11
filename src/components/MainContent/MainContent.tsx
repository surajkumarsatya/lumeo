'use client';

import { Button } from '@/components/ui/button';
import { FiPlus } from 'react-icons/fi';
import { TbUserPlus } from 'react-icons/tb';
// import { Input } from '@/components/ui/input';
import {
  InputGroup,
  InputGroupAddon,
  // InputGroupButton,
  InputGroupInput,
  // InputGroupText,
  // InputGroupTextarea,
} from '@/components/ui/input-group';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { InputGroupButton, InputGroupTextarea } from '@/components/ui/input-group';

// import { Textarea } from '@/components/ui/textarea';
// import { IconPlus } from '@tabler/icons-react';
import { ArrowUpIcon } from 'lucide-react';

import { IoSearchSharp } from 'react-icons/io5';
import logo from '../../../public/images/nexlLogo.svg';
import Image from 'next/image';
import ExampleText from '../ExampleText/ExampleText';

export default function MainContent() {
  return (
    <div className="flex flex-col mx-auto min-h-screen py-6">
      <div className="flex justify-between items-center px-6 ">
        <div>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select Models" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Select Models</SelectLabel>
                <SelectItem value="apple">Gemini</SelectItem>
                <SelectItem value="banana">ChatGPT 4o</SelectItem>
                <SelectItem value="blueberry">Claude</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-3">
          <div>
            <InputGroup>
              <InputGroupInput placeholder="Search thread" />
              <InputGroupAddon>
                <IoSearchSharp />
              </InputGroupAddon>
            </InputGroup>
          </div>
          <div>
            <Button variant="outline">
              <TbUserPlus /> Invite
            </Button>
          </div>

          <div>
            <Button variant="default">
              <FiPlus /> New Thread
            </Button>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto flex-1">
        <div className="flex flex-col gap-10 items-center w-[70%] mx-auto justify-center">
          <div className="text-right">
            <div className="">
              <Image src={logo} alt="logo" className=" mx-auto" width={150} />
            </div>
            <h1 className="leading-tight">
              Meet the <span className="font-bold text-purple-700">nex</span>t{' '}
              <span className="font-bold text-purple-700">l</span>
              evel of intelligence Hi I am Prabhat Kumar
            </h1>
            <h4 className="text-purple-600 uppercase tracking-widest">
              Think dexttt. Think <span className="font-bold">dexlll</span>.
            </h4>
            <p>Hello how are you ?</p>
          </div>

          {/* <div className="grid w-full gap-2">
            <Textarea placeholder="Ask AI a question or make a request" />
            <div className="grid justify-end">
              <Button className="w-40 grid">Send message</Button>
            </div>
          </div> */}

          <div className="grid min-w-full max-w-100">
            <InputGroup className="">
              <InputGroupTextarea placeholder="Ask, Search or Chat..." />
              <InputGroupAddon align="block-end" className="grid justify-end">
                <InputGroupButton
                  variant="default"
                  className="rounded-full bg-purple-700"
                  size="icon-xs"
                >
                  <ArrowUpIcon />
                  <span className="sr-only">Send</span>
                </InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>

          <div>
            <p className="pb-2 text-sm">GETTNG STARTED WITH AN EXAMPLE BELOW</p>
            <ExampleText />
          </div>
        </div>
      </div>
    </div>
  );
}

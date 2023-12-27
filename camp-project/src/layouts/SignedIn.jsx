import React from 'react'
import { Dropdown, DropdownItem, Image, Menu } from 'semantic-ui-react'

export default function SignedIn({signOut}) {
  return (
    <div>
       <Menu.Item>
            <Image avatar spaced="right" src="https://lh3.googleusercontent.com/a/ACg8ocIX4AzQoGrN3HqUsc7iNjCDIWAyOvt43E1UN8wzxczupA=s360-c-no"></Image>
            <Dropdown pointing="top left" text='Emre'>
                <Dropdown.Menu>
                    <DropdownItem text="Bilgilerim" icon="info"/>
                    <DropdownItem onClick={signOut} text="Çıkış Yap" icon="sign-out"/>
                </Dropdown.Menu>
            </Dropdown>
       </Menu.Item>
    </div>
  )
}

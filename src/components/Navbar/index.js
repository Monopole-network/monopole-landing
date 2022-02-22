import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  ButtonGroup,
  Divider,
  Image,
  Flex,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
  Icon,
  Text,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';

import { FaWallet, FaAngleUp, FaAngleDown } from 'react-icons/fa';

import { MonopoleIconText, MonopoleIcon } from '../Icons/Icons';
import { WalletModal } from '../WalletModal';

export default function Navbar(props) {
  const {
    switchNetworkWallet,
    usernameWallet,
    accountWallet,
    networkWallet,
    supportedNetworksWallet,
    connectorsWallet,
    activeWallet,
    errorWallet,
    loadingWallet,
    connectWallet,
    disconnectWallet,
  } = props;

  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  return (
    <>
      <WalletModal
        switchNetworkWallet={switchNetworkWallet}
        usernameWallet={usernameWallet}
        accountWallet={accountWallet}
        networkWallet={networkWallet}
        supportedNetworksWallet={supportedNetworksWallet}
        connectorsWallet={connectorsWallet}
        activeWallet={activeWallet}
        errorWallet={errorWallet}
        loadingWallet={loadingWallet}
        connectWallet={connectWallet}
        disconnectWallet={disconnectWallet}
        isOpen={isOpen}
        onClose={onClose}
        onOpen={onOpen}
      />
      <Box top='0px' left='0px' right='0px' height='88px'></Box>
      <Box
        px={{ sm: '20px', md: '30px', lg: '40px' }}
        position='fixed'
        left='0px'
        right='0px'
        top='0px'
        height='88px'
        zIndex='2'
        backdropFilter='blur(25px)'
        backgroundColor={colorMode === 'dark' && '#0104264f'}
      >
        <Flex height='100%' alignItems='center' justifyContent='space-between'>
          <Flex alignItems='center'>
            <Flex display={{ sm: 'none', md: 'none', lg: 'block' }}>
              <Button
                height='25px'
                width='180px'
                background='transparent'
                _hover={{ background: 'transparent' }}
                _active={{ background: 'transparent' }}
                onClick={() => {
                  navigate('/');
                }}
              >
                <MonopoleIconText height='25px' width='180px' />
              </Button>
            </Flex>
            <Flex display={{ sm: 'block', md: 'block', lg: 'none' }}>
              <Button
                height='43px'
                width='43px'
                background='transparent'
                _hover={{ background: 'transparent' }}
                _active={{ background: 'transparent' }}
                onClick={() => {
                  navigate('/');
                }}
              >
                <MonopoleIcon height='19px' width='43px' />
              </Button>
            </Flex>
            <Flex>
              <Divider
                ml='30px'
                height='40px'
                orientation='vertical'
                mr='10px'
                bg='#353945'
                display={{ sm: 'none', md: 'block', lg: 'block' }}
              />
              <ButtonGroup display={{ sm: 'none', md: 'block', lg: 'block' }}>
                <Flex
                  justifyContent='center'
                  textAlign='center'
                  alignItems='center'
                >
                  <HashLink
                    to='/#WhatIsMonopole'
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'end' })
                    }
                    smooth
                  >
                    <Button
                      variant='ghost'
                      display={{ sm: 'none', md: 'block', lg: 'block' }}
                      _hover={{ background: 'transparent' }}
                      borderRadius='25px'
                      _active={{ background: 'transparent' }}
                    >
                      <Text fontSize='14px' fontWeight='700'>
                        What is Monopole
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to='/#MnplToken'
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'end' })
                    }
                    smooth
                  >
                    <Button
                      variant='ghost'
                      display={{ sm: 'none', md: 'block', lg: 'block' }}
                      _hover={{ background: 'transparent' }}
                      borderRadius='25px'
                      _active={{ background: 'transparent' }}
                    >
                      <Text fontSize='14px' fontWeight='700'>
                        Our token
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to='/#LitePaper'
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'end' })
                    }
                    smooth
                  >
                    <Button
                      variant='ghost'
                      display={{ sm: 'none', md: 'none', lg: 'block' }}
                      _hover={{ background: 'transparent' }}
                      borderRadius='25px'
                      _active={{ background: 'transparent' }}
                    >
                      <Text fontSize='14px' fontWeight='700'>
                        Lite paper
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to='/#Team'
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    smooth
                  >
                    <Button
                      variant='ghost'
                      display={{ sm: 'none', md: 'block', lg: 'block' }}
                      _hover={{ background: 'transparent' }}
                      borderRadius='25px'
                      _active={{ background: 'transparent' }}
                    >
                      <Text fontSize='14px' fontWeight='700'>
                        Team
                      </Text>
                    </Button>
                  </HashLink>
                  <HashLink
                    to='/#Faq'
                    scroll={(el) =>
                      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    }
                    smooth
                  >
                    <Button
                      variant='ghost'
                      display={{ sm: 'none', md: 'none', lg: 'block' }}
                      _hover={{ background: 'transparent' }}
                      borderRadius='25px'
                      _active={{ background: 'transparent' }}
                    >
                      <Text fontSize='14px' fontWeight='700'>
                        FAQ
                      </Text>
                    </Button>
                  </HashLink>
                </Flex>
              </ButtonGroup>
            </Flex>
          </Flex>
          <Flex alignItems='center' border='2px solid' borderRadius='50px'>
            <Button
              borderRadius='50px'
              background='transparent'
              onClick={() => {
                onOpen();
              }}
              _hover={{ background: 'transparent' }}
              _active={{ background: 'transparent' }}
            >
              {activeWallet ? (
                <Flex flexDirection='row' alignItems='center'>
                  <Icon h='16px' w='16px' as={FaWallet} mr='10px' />
                  {usernameWallet ? (
                    <Text fontSize='14px' fontWeight='700' mt='3px'>
                      {usernameWallet}
                    </Text>
                  ) : (
                    <Text fontSize='14px' fontWeight='700' mt='3px'>
                      {accountWallet.substring(0, 6)}...
                      {accountWallet.substring(accountWallet.length - 4)}
                    </Text>
                  )}
                </Flex>
              ) : (
                <Text fontSize='14px' fontWeight='700' mt='3px'>
                  Connect Wallet
                </Text>
              )}
            </Button>
            {networkWallet && (
              <Menu>
                <MenuButton>
                  <Button background='transparent' borderRadius='50px'>
                    <Image
                      mr='5px'
                      h='20px'
                      w='20px'
                      src={supportedNetworksWallet[networkWallet].logo}
                    />
                    <Flex flexDirection='column'>
                      <Icon h='12px' w='12px' as={FaAngleUp} />
                      <Icon h='12px' w='12px' as={FaAngleDown} />
                    </Flex>
                  </Button>
                </MenuButton>
                <MenuList borderRadius='20px' alignItems='center'>
                  <Flex flexDirection='column'>
                    {Object.keys(supportedNetworksWallet).map((networkId) => {
                      return (
                        <MenuItem
                          borderRadius='20px'
                          onClick={() => {
                            switchNetworkWallet(networkId);
                          }}
                        >
                          <Image
                            mr='10px'
                            h='25px'
                            w='25px'
                            color='white'
                            src={supportedNetworksWallet[networkId].logo}
                          />
                          <Text fontSize='md'>
                            {supportedNetworksWallet[networkId].name}
                          </Text>
                        </MenuItem>
                      );
                    })}
                  </Flex>
                </MenuList>
              </Menu>
            )}
            <Button
              background='transparent'
              onClick={toggleColorMode}
              borderRadius='50px'
              _hover={{ background: 'transparent' }}
              _active={{ background: 'transparent' }}
            >
              {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
            </Button>
          </Flex>
        </Flex>
      </Box>
    </>
  );
}

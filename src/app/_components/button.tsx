"use client";

import { Modal } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export default function Button() {
  const [opened, { open, close }] = useDisclosure(false);
  console.log(opened);
  return (
    <>
      <Modal
        size={320}
        opened={opened}
        onClose={close}
        title="タイトル"
        centered
      >
        <div className="bg-red-400 w-10 h-10">あああ</div>
      </Modal>
      <button onClick={open}>ボタン</button>
    </>
  );
}

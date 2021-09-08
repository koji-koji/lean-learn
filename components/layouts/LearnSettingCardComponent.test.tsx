/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import LearnSettingCardComponent from '../mass/LearnSettingCardComponent'
import userEvent from '@testing-library/user-event'

describe('学習項目追加・削除', () => {
  describe('追加アイコン', () => {
    test('クリックすると学習項目が1つ増える。', () => {
      render(<LearnSettingCardComponent />)
      const pre = screen.getAllByText(/学習項目/i)
      userEvent.click(screen.getByTestId('addLearnInfoIcon'))
      const after = screen.getAllByText(/学習項目/i)

      expect(after.length - pre.length).toBe(1)
    })
  })

  describe('削除ボタン', () => {
    test('1つのときにはdisabledになっている', () => {
      render(<LearnSettingCardComponent />)
      userEvent.click(screen.getByTestId('addLearnInfoIcon'))
      const deleteButton = screen.getByText(/削除/i)
      expect(deleteButton.closest('button')).toHaveAttribute('disabled')
    })
    test('2つある時にクリックすると、1回目は削除できて、2回目は削除できない。', () => {
      render(<LearnSettingCardComponent />)
      userEvent.click(screen.getByTestId('addLearnInfoIcon'))
      userEvent.click(screen.getByTestId('addLearnInfoIcon'))

      const deleteButtons = screen.getAllByText(/削除/i)
      expect(deleteButtons[0].closest('button')).not.toHaveAttribute('disabled')
      expect(deleteButtons[1].closest('button')).not.toHaveAttribute('disabled')

      userEvent.click(deleteButtons[0].closest('button') as Element)
      const afterDeleteClickButtons = screen.getAllByText(/削除/i)
      expect(afterDeleteClickButtons[0].closest('button')).toHaveAttribute(
        'disabled'
      )
    })
  })
})

describe('復習日の追加・削除', () => {
  describe('追加アイコン', () => {
    test('クリックすると復習日が1つ増える。', () => {
      render(<LearnSettingCardComponent />)
      const preReLearnInputArray = screen.queryAllByTestId('reLearnInputPair')
      expect(preReLearnInputArray.length).toEqual(0)

      userEvent.click(screen.getByTestId('addLearnInfoIcon'))
      const firstReLearnInputArray = screen.getAllByTestId('reLearnInputPair')
      expect(firstReLearnInputArray.length).toEqual(1)

      userEvent.click(screen.getByTestId('reLearnPlusIcon'))
      const secondReLearnInputArray = screen.getAllByTestId('reLearnInputPair')
      expect(secondReLearnInputArray.length).toEqual(2)
    })
  })
  describe('削除アイコン', () => {
    test('1つのときにはdisabledになっている', () => {
      render(<LearnSettingCardComponent />)

      const preReLearnInputArray = screen.queryAllByTestId('reLearnInputPair')
      expect(preReLearnInputArray.length).toEqual(0)

      userEvent.click(screen.getByTestId('addLearnInfoIcon'))
      const reLearnInputPairs = screen.getAllByTestId('reLearnInputPair')
      const deleteButton =
        reLearnInputPairs[0].getElementsByTagName('button')[0]

      expect(deleteButton).toHaveAttribute('disabled')
    })
    test('2つある時にクリックすると、1回目は削除できて、2回目は削除できない。', () => {
      render(<LearnSettingCardComponent />)

      const preReLearnInputArray = screen.queryAllByTestId('reLearnInputPair')
      expect(preReLearnInputArray.length).toEqual(0)

      userEvent.click(screen.getByTestId('addLearnInfoIcon'))

      // プラスアイコンをクリックした際にdisabledでなくなっていることのチェック。
      userEvent.click(screen.getByTestId('reLearnPlusIcon'))
      const reLearnInputPairs = screen.getAllByTestId('reLearnInputPair')
      expect(reLearnInputPairs.length).toEqual(2)
      expect(
        reLearnInputPairs[0].getElementsByTagName('button')[0]
      ).not.toHaveAttribute('disabled')
      expect(
        reLearnInputPairs[1].getElementsByTagName('button')[0]
      ).not.toHaveAttribute('disabled')

      // マイナスアイコンを押して、1つになったときにdisabledになっているように。
      userEvent.click(reLearnInputPairs[0].getElementsByTagName('button')[0])
      const afterReLearnInputPairs = screen.getAllByTestId('reLearnInputPair')
      expect(afterReLearnInputPairs.length).toEqual(1)
      expect(
        afterReLearnInputPairs[0].getElementsByTagName('button')[0]
      ).toHaveAttribute('disabled')
    })
  })
})

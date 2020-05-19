export const state = () => ({
  data: {
    scale: 1,
    lineName: 'curve',
    fromArrowType: '',
    toArrowType: 'triangleSolid',
    locked: 1,
  },
})

export const mutations = {
  data(state, data) {
    state.data = data
  }
}
import L from "leaflet"

declare module "leaflet" {
  interface TileLayerOptions {
    nativeZooms?: number[]
  }

  interface TileLayer {
    _mapNativeZoom(zoom: number): number
  }
}

// Fill in missing zoom levels of a tile layer with scaled previous zooms.
// Written by Ilya Zverev, licensed WTFPL

L.TileLayer.mergeOptions({
  nativeZooms: [], // array of integers
})

L.TileLayer.addInitHook(function (this: L.TileLayer) {
  const opt = this.options
  const zooms = opt.nativeZooms
  if (zooms && zooms.length > 0) {
    let minZoom = 100
    for (let i = 0; i < zooms.length; i++) {
      if (zooms[i] < minZoom) {
        minZoom = zooms[i]
      }
    }
    opt.minZoom = Math.max(opt.minZoom || 0, minZoom - 1)
  }
})

L.TileLayer.include({
  getTileSize: function () {
    const map = this._map
    const tileSize = L.GridLayer.prototype.getTileSize.call(this)
    const zoom = this._tileZoom + this.options.zoomOffset
    const nativeZoom = this._mapNativeZoom(zoom)

    return nativeZoom == zoom
      ? tileSize
      : tileSize.divideBy(map.getZoomScale(nativeZoom, zoom)).round()
  },

  _getZoomForUrl: function () {
    let zoom = this._tileZoom
    const maxZoom = this.options.maxZoom
    const zoomReverse = this.options.zoomReverse
    const zoomOffset = this.options.zoomOffset

    if (zoomReverse) {
      zoom = maxZoom - zoom
    }

    zoom += zoomOffset

    return this._mapNativeZoom(zoom)
  },

  _mapNativeZoom: function (zoom: number) {
    const zooms = this.options.nativeZooms
    const minNativeZoom = this.options.minNativeZoom
    const maxNativeZoom = this.options.maxNativeZoom

    if (zooms && zooms.length > 0) {
      let prevZoom = -1
      let minZoom = 100
      for (let i = 0; i < zooms.length; i++) {
        if (zooms[i] <= zoom && zooms[i] > prevZoom) {
          prevZoom = zooms[i]
        }
        if (zooms[i] < minZoom) {
          minZoom = zooms[i]
        }
      }
      zoom = prevZoom < 0 ? minZoom : prevZoom
    } else if (maxNativeZoom !== null && zoom > maxNativeZoom) {
      zoom = maxNativeZoom
    } else if (minNativeZoom !== null && zoom < minNativeZoom) {
      zoom = minNativeZoom
    }
    return zoom
  },
})
